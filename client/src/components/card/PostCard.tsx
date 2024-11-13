import React, { useRef, useState, useEffect, CSSProperties } from "react";
import Post from "../../types/post";
import PostService from "../../services/post.service";
import Loading from "../common/Loading";
import Text from "../common/Text";
import { Colors } from "../../constants/styles";
import Icon from "../common/Icon";
import heart_outline from "../../assets/icons/heart_outline.svg";
import heart_filled from "../../assets/icons/heart_filled.svg";

export default function PostCard({ postId }: { postId: string }): JSX.Element {
  const post = useRef<Post | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      post.current = await PostService.getPost(postId);
      setIsLoading(false);
    };
    setIsLoading(true);
    fetch();
  }, [postId]);
  const [icon, setIcon] = useState(heart_outline);

  const cardStyle: CSSProperties = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "start",
    height: "6.5em",
    margin: "0.75em",
  };
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <section id={`${postId}-card`} style={cardStyle}>
          <div
            id="thumbnail"
            style={{
              width: "6.5em",
              height: "auto",
              backgroundColor: "gray",
              borderRadius: "0.5em",
            }}
          >
            No Image
          </div>
          <div
            id="content"
            style={{
              marginLeft: "0.5em",
              height: "6.5em",
              width: "calc(100% - 6.5em)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Text
              content={post.current!.title}
              fontSize={1.25}
              fontWeight="bold"
            />
            <Text
              content={post.current!.description}
              fontSize={0.85}
              fontWeight="normal"
            />
            <Text
              content={post.current!.location}
              fontSize={0.85}
              fontWeight="normal"
            />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                content={"$ " + post.current!.price}
                fontSize={1.2}
                fontWeight="700"
                color={Colors.primaryColor}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onClick={() => setIcon(icon === heart_outline ? heart_filled : heart_outline)}
              >
                <Icon src={icon} alt="heart" size={1} />
                <Text
                  content={post.current!.likes.toString()}
                  fontSize={1}
                  fontWeight="normal"
                  color={Colors.primaryColor}
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
