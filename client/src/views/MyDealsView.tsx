import { useEffect, useState } from "react";
import PostCard from "../components/card/PostCard";
import PostService from "../services/post.service"; 
import Post from "../types/post";
import Loading from "../components/common/Loading"; 

export default function MyDealsView(): JSX.Element {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const fetchedPosts = await PostService.getPosts();
      setPosts(fetchedPosts);
      setIsLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <div className="DealView">
      {isLoading ? (
        <Loading />
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
          {posts.map((post) => (
            <PostCard key={post._id} postId={post._id} />
          ))}
        </div>
      )}
    </div>
  );
}
