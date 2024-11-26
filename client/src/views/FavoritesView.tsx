import React, { useState, useRef, useEffect } from "react";
import NavigationBar from "../components/wireframe/NavigationBar";
import authService from "../services/auth.service";
import postService from "../services/post.service";
import categoryService from "../services/category.service";
import User from "../types/user";
import Loading from "../components/common/Loading";
import PostCard from "../components/card/PostCard";
import Post from "../types/post";
import Category from "../types/category";
import CategoryCard from "../components/card/CategoryCard";

export default function FavoritesView(): JSX.Element {
  type Pair<P, Q> = {
    p: P;
    q: Q[];
  };
  const userRef = useRef<User | null>(null);
  const categorizedPosts = useRef<Pair<Category, Post>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      userRef.current = await authService.getCurrentUser();
      const categories = await categoryService.getCategories();
      const likedPosts = [];
      for (let post of userRef.current.likedPosts) {
        likedPosts.push(await postService.getPost(post));
      }
      for (let category of categories) {
        const pair: Pair<Category, Post> = {
          p: category,
          q: likedPosts.filter((post) => post.category === category._id),
        };
        if (pair.q.length === 0) continue;
        categorizedPosts.current.push(pair);
      }
      setIsLoading(false);
    };
    fetch();
  }, []);

  return (
    <>
      <main style={{ overflow: "auto", height: "80vh" }}>
        {isLoading ? (
          <Loading />
        ) : (
          categorizedPosts.current.map((pair) => (
            <>
              <CategoryCard key={pair.p._id} categoryId={pair.p._id} />
              {pair.q.map((post) => (
                <PostCard key={post._id} postId={post._id} />
              ))}
            </>
          ))
        )}
      </main>
      <NavigationBar />
    </>
  );
}
