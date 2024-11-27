import React, { useEffect, useRef, useState } from "react";
import NavigationBar from "../components/wireframe/NavigationBar";
import PostService from "../services/post.service";
import Post from "../types/post";
import Loading from "../components/common/Loading";
import PostCard from "../components/card/PostCard";
import Text from "../components/common/Text";
import { Colors } from "../constants/styles";
import RevenueBox from "../components/designbox/RevenueBox";
import User from "../types/user";
import authService from "../services/auth.service";

export default function DealsView(): JSX.Element {
  const posts = useRef<Post[]>([]);
  const userRef = useRef<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("In Sale");

  useEffect(() => {
    const fetch = async () => {
      userRef.current = await authService.getCurrentUser();
      const userPosts = [];
      for (const postId of userRef.current.userPosts) {
        userPosts.push(await PostService.getPost(postId));
      }
      posts.current = userPosts;
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  const revenueData = [
    { value: 50, month: "March", isCurrent: false },
    { value: 56, month: "April", isCurrent: false },
    { value: 41, month: "May", isCurrent: false },
    { value: 69, month: "August", isCurrent: false },
    { value: 97, month: "September", isCurrent: false },
    { value: 32, month: "Current", isCurrent: true },
    { value: 0, month: "December", isCurrent: false },
  ];

  const tabs = ["In Sale", "Concluded", "Hidden"];

  return (
    <>
      <div style={{ margin: "10px" }} className="Records">
        <Text
          content="My Sales"
          fontSize={1.5}
          fontWeight="bold"
          color={"black"}
        />
        <Text
          content="2024 Total Transactions"
          fontSize={1.2}
          fontWeight="bold"
          color={Colors.fourthColor}
        />
        <Text
          content="$497"
          fontSize={1.5}
          fontWeight="bold"
          color={Colors.primaryColor}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: "20px",
          margin: "20px",
        }}
      >
        {revenueData.map((data, index) => (
          <RevenueBox
            key={index}
            value={data.value}
            month={data.month}
            isCurrent={data.isCurrent}
          />
        ))}
      </div>
      <div style={{ margin: "10px 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginBottom: "10px",
          }}
        >
          {tabs.map((tab) => (
            <span
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                cursor: "pointer",
                fontSize: "1.2em",
                fontWeight: activeTab === tab ? "bold" : "normal",
                color: activeTab === tab ? Colors.primaryColor : "gray",
                textDecoration: activeTab === tab ? "underline" : "none",
              }}
            >
              <br />
              {tab}
            </span>
          ))}
        </div>
      </div>
      <div className="Line"></div>
      <main style={{ overflow: "auto", height: "50vh" }}>
        {isLoading ? (
          <Loading />
        ) : (
          posts.current.map((post) => (
            <PostCard key={post._id} postId={post._id} />
          ))
        )}
      </main>
      <NavigationBar />
    </>
  );
}
