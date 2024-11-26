import React, { useEffect, useRef, useState } from "react";
import Banner from "../components/wireframe/Banner";
import NavigationBar from "../components/wireframe/NavigationBar";
import Header from "../components/wireframe/Header";
import { HeaderType } from "../constants/enums";
import PostService from "../services/post.service";
import Post from "../types/post";
import Loading from "../components/common/Loading";
import PostCard from "../components/card/PostCard";
import Category from "../types/category";
import CategoryService from "../services/category.service";
import { useParams } from "react-router-dom";
import MainCategoryHeader from "../components/wireframe/MainCategoryHeader";

export default function MainView(): JSX.Element {
  const posts = useRef<Post[]>([]);
  const categoryRef = useRef<Category | null>(null);

  const [isLoading, setIsLoading] = useState(true);
  const { category } = useParams<{ category: string }>();
  useEffect(() => {
    const fetch = async () => {
      posts.current = category
        ? await PostService.getPostsByCategory(category)
        : await PostService.getPosts();
      if (category) {
        categoryRef.current = await CategoryService.getCategory(category);
      }

      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, [category]);

  return (
    <>
      <Banner />
      {category ? (
        !isLoading && <MainCategoryHeader category={categoryRef.current!} />
      ) : (
        <Header type={HeaderType.MainView} />
      )}
      <main style={{ overflow: "auto", height: "80vh" }}>
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
