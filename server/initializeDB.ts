import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./src/models/user.model";
import Category from "./src/models/category.model";
import Post from "./src/models/post.model";
import Review from "./src/models/review.model";
import Chatroom from "./src/models/chatroom.model";
import Chat from "./src/models/chat.model";
import Image from "./src/models/image.model";

dotenv.config();

async function connectDB() {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error("MONGO_URI is not defined in .env file");
    }

    await mongoose.connect(uri);
    console.log("Connected to MongoDB");

    // Initialize database after successful connection
    await initializeDB();
  } catch (error) {
    console.error("Database connection error:", error);
    process.exit(1);
  }
}

const categories = [
  { name: "Electronics", icon: "💻" },
  { name: "Furniture", icon: "🪑" },
  { name: "Vehicles", icon: "🚗" },
  { name: "Books", icon: "📚" },
  { name: "Sports", icon: "⚽" },
];

const users = [
  { name: "John Doe", status: "active", location: "New York" },
  { name: "Jane Smith", status: "active", location: "Los Angeles" },
  { name: "Mike Johnson", status: "away", location: "Chicago" },
];

const samplePosts = [
  {
    title: "iPhone 13 Pro",
    description: "Excellent condition, barely used",
    price: 799.99,
    location: "New York",
    isNegotiable: true,
    displayType: "featured",
    images: ["iphone13.jpg"],
  },
  {
    title: "Leather Sofa",
    description: "Premium leather sofa, 2 years old",
    price: 599.99,
    location: "Los Angeles",
    isNegotiable: true,
    displayType: "standard",
    images: ["sofa.jpg"],
  },
];

async function initializeDB() {
  try {
    // Clear existing data
    await mongoose.connection.dropDatabase();

    // Create categories
    const createdCategories = await Category.create(categories);

    // Create users
    const createdUsers = await User.create(users);

    // Create images first
    const createdImages = await Image.create([
      { data: "base64_encoded_iphone_image_data" },
      { data: "base64_encoded_sofa_image_data" },
    ]);

    // Create posts with image references
    const posts = samplePosts.map((post, index) => ({
      ...post,
      user: createdUsers[index % createdUsers.length]._id,
      category: createdCategories[index % createdCategories.length]._id,
      images: [createdImages[index]._id], // Reference to created images
    }));
    const createdPosts = await Post.create(posts);

    // Update users with their posts
    await User.updateMany({}, { $set: { userPosts: [], likedPosts: [] } });
    await User.findByIdAndUpdate(createdUsers[0]._id, {
      $push: { userPosts: createdPosts[0]._id },
    });
    await User.findByIdAndUpdate(createdUsers[1]._id, {
      $push: { userPosts: createdPosts[1]._id },
    });

    // Create reviews
    const reviews = [
      {
        author: createdUsers[0]._id,
        target: createdUsers[1]._id,
        content: "Great seller, very responsive!",
      },
      {
        author: createdUsers[1]._id,
        target: createdUsers[0]._id,
        content: "Smooth transaction, recommended!",
      },
    ];
    const createdReviews = await Review.create(reviews);

    // Update users with their reviews
    await User.findByIdAndUpdate(createdUsers[0]._id, {
      $push: { reviews: createdReviews[1]._id },
    });
    await User.findByIdAndUpdate(createdUsers[1]._id, {
      $push: { reviews: createdReviews[0]._id },
    });

    // Create chatroom
    const chatroom = await Chatroom.create({
      post: createdPosts[0]._id,
      users: [createdUsers[0]._id, createdUsers[1]._id],
      chats: [],
    });

    // Create chats
    const chats = await Chat.create([
      {
        chatroom: chatroom._id,
        from: createdUsers[0]._id,
        to: createdUsers[1]._id,
        content: "Is this still available?",
      },
      {
        chatroom: chatroom._id,
        from: createdUsers[1]._id,
        to: createdUsers[0]._id,
        content: "Yes, it is!",
      },
    ]);

    // Update chatroom with chats
    await Chatroom.findByIdAndUpdate(chatroom._id, {
      $push: { chats: { $each: chats.map((chat) => chat._id) } },
    });

    // Update users with chatroom
    await User.updateMany(
      { _id: { $in: [createdUsers[0]._id, createdUsers[1]._id] } },
      { $push: { chatrooms: chatroom._id } }
    );

    console.log("Database initialized successfully!");
  } catch (error) {
    console.error("Error initializing database:", error);
  }
}

await connectDB();
