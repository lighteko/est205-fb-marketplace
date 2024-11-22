import { Schema, model } from "mongoose";
const CategorySchema = new Schema({
    name: { type: String, required: true },
    icon: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
    createdAt: { type: Date, default: Date.now },
});
export default model("Category", CategorySchema);
