import { useState, useEffect, useRef } from "react";
import postService from "../services/post.service";
import userService from "../services/user.service";
import chatroomService from "../services/chatroom.service";
import Post from "../types/post";
import User from "../types/user";
import { Link, useParams, useNavigate } from "react-router-dom";
import Text from "../components/common/Text";
import { toEasyPrice } from "../shared/auxilary";
import { Colors } from "../constants/styles";
import authService from "../services/auth.service";
import Icon from "../components/common/Icon";
import exit from "../assets/icons/exit.svg";
import RectButton from "../components/common/RectButton";
import Chatroom from "../types/chatroom";
import heart_outline from "../assets/icons/heart_outline.svg";
import heart_filled from "../assets/icons/heart_filled.svg";

export default function PostView(): JSX.Element {
  const postRef = useRef<Post | null>(null);
  const userRef = useRef<User | null>(null);
  const postTypeRef = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);
  const { post } = useParams<{ post: string }>();
  const navigate = useNavigate();
  const [likes, setLikes] = useState(0);
  const [icon, setIcon] = useState(heart_outline);

  useEffect(() => {
    const fetch = async () => {
      postRef.current = await postService.getPost(post!);
      userRef.current = await userService.getUser(postRef.current.user);
      setLikes(postRef.current.likes);
      const currentUser = await authService.getCurrentUser();
      if (currentUser!.likedPosts.includes(post!)) setIcon(heart_filled);
      postTypeRef.current =
        (await authService.getCurrentUserId()) === userRef.current!._id;
      setIsLoading(false);
    };
    fetch();
  }, [post]);

  const sendMessage = async () => {
    const currentUser = await authService.getCurrentUser();
    if (currentUser._id === userRef.current?._id) {
      window.alert("You can't send message to yourself!");
      return;
    }
    const chatroomData = {
      post: post!,
      users: [userRef.current!._id, await authService.getCurrentUserId()],
      chats: [],
    } as Partial<Chatroom>;

    const newChatroom = await chatroomService.createChatroom(chatroomData);
    await userService.updateUser(currentUser._id, {
      chatrooms: [...currentUser.chatrooms, newChatroom._id],
    });
    navigate(`/chatroom/${newChatroom._id}/chat`);
  };

  const like = async () => {
    if (postRef.current) {
      const currentUser = await authService.getCurrentUser();
      await postService.updatePost(post!, { likes: postRef.current.likes + 1 });
      await userService.updateUser(currentUser!._id, {
        likedPosts: [...userRef.current!.likedPosts, post!],
      });
      setLikes(likes + 1);
      setIcon(heart_filled);
    }
  };

  const unlike = async () => {
    if (postRef.current) {
      const currentUser = await authService.getCurrentUser();
      await postService.updatePost(post!, { likes: likes - 1 });
      await userService.updateUser(currentUser!._id, {
        likedPosts: [
          ...userRef.current!.likedPosts.filter((value) => value !== post!),
        ],
      });
      setLikes(likes - 1);
      setIcon(heart_outline);
    }
  };

  return isLoading ? (
    <>Loading...</>
  ) : (
    <>
      <section
        style={{
          width: "auto",
          height: "40vh",
          backgroundColor: Colors.fourthColor,
          display: "flex",
          flexDirection: "column",
          alignItems: "end",
        }}
      >
        <Link to="/posts">
          <Icon src={exit} alt="Exit" size={1.5} />
        </Link>
      </section>
      <section
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginRight: "1em",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "1em",
          }}
        >
          <div
            id="profileIcon"
            style={{
              width: "3.5em",
              height: "3.5em",
              borderRadius: "1.75em",
              backgroundColor: Colors.secondaryColor,
              marginRight: "1em",
            }}
          ></div>
          <Text
            content={userRef.current!.name}
            fontSize={1.5}
            fontWeight={"bold"}
          />
        </div>
      </section>
      <section style={{ padding: "1em" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            content={postRef.current!.title}
            fontSize={1.7}
            fontWeight={"bold"}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            onClick={() => {
              icon === heart_outline ? like() : unlike();
              setIcon(icon === heart_outline ? heart_filled : heart_outline);
            }}
          >
            <Icon src={icon} alt="heart" size={1} />
            <Text
              content={likes.toString()}
              fontSize={1}
              fontWeight="normal"
              color={Colors.primaryColor}
            />
          </div>
        </div>
        <Text
          content={"$" + toEasyPrice(postRef.current!.price)}
          fontSize={1.5}
          fontWeight={"600"}
        />
        <Text
          content={postRef.current!.description}
          fontSize={1}
          fontWeight={"400"}
        />
        <RectButton
          text={"Message"}
          onClick={sendMessage}
          size={10}
          style={{ width: "6em", height: "2.5em", margin: 0, marginTop: "1em" }}
        />
      </section>
    </>
  );
}
