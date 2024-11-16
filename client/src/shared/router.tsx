import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CategoryView from "../views/CategoryView";
import ChatroomView from "../views/ChatroomView";
import ChatView from "../views/ChatView";
import CreatePostView from "../views/CreatePostView";
import LocationView from "../views/LocationView";
import RatingView from "../views/RatingView";
import FavoritesView from "../views/FavoritesView";
import MainView from "../views/MainView";
import MyDealsView from "../views/MyDealsView";
import MyProfileView from "../views/MyProfileView";
import PostView from "../views/PostView";
import UserView from "../views/UserView";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/:category" element={<MainView />} />
        <Route path="/category" element={<CategoryView />} />
        <Route path="/chatroom/:chatroom/chat" element={<ChatView />} />
        <Route path="/chatrooms" element={<ChatroomView />} />
        <Route path="/post/create" element={<CreatePostView />} />
        <Route path="/post/rating" element={<RatingView />} />
        <Route path="/post/location" element={<LocationView />} />
        <Route path="/post/:post" element={<PostView />} />
        <Route path="/favorites" element={<FavoritesView />} />
        <Route path="/mydeals" element={<MyDealsView />} />
        <Route path="/myprofile" element={<MyProfileView />} />
        <Route path="/user/:user" element={<UserView />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
