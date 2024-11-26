import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryView from "../views/CategoryView";
import ChatroomView from "../views/ChatroomView";
import ChatView from "../views/ChatView";
import CreatePostView from "../views/CreatePostView";
import RatingView from "../views/RatingView";
import FavoritesView from "../views/FavoritesView";
import MainView from "../views/MainView";
import DealsView from "../views/DealsView";
import ProfileView from "../views/ProfileView";
import PostView from "../views/PostView";
import UserView from "../views/UserView";
import LandingView from "../views/LandingView";


const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingView />} />
        <Route path="/posts" element={<MainView />} />
        <Route path="/posts/category/:category" element={<MainView />} />
        <Route path="/categories" element={<CategoryView />} />
        <Route path="/chatroom/:chatroom/chat" element={<ChatView />} />
        <Route path="/chatrooms" element={<ChatroomView />} />
        <Route path="/post/create" element={<CreatePostView />} />
        <Route path="/post/:post/rating" element={<RatingView />} />
        <Route path="/post/:post" element={<PostView />} />
        <Route path="/favorites" element={<FavoritesView />} />
        <Route path="/deals" element={<DealsView />} />
        <Route path="/profile" element={<ProfileView />} />
        <Route path="/user/:user" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
