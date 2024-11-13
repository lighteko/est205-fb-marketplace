import React, {useEffect, useRef, useState} from "react";
import Banner from "../components/wireframe/Banner";
import NavigationBar from "../components/wireframe/NavigationBar";
import Header from "../components/wireframe/Header";
import { HeaderType } from "../constants/enums";
import PostService from "../services/post.service";
import Post from "../types/post";
import Loading from "../components/common/Loading";
import PostCard from "../components/card/PostCard";

export default function MainView(): JSX.Element {
  const posts = useRef<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      posts.current = await PostService.getPosts();
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, []);

  return (
    <>
      <Banner />
      <Header type={HeaderType.MainView}/>
      <main>
      {isLoading ? (<Loading />) : 
        posts.current.map((post) => (
          <PostCard key={post._id} postId={post._id} />
        ))
      }
      </main>
      <NavigationBar />
    </>
  );
}
