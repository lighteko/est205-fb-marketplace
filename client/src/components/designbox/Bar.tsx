import Post from "../../types/post";

type BarProps = {
  post: Post;
};

export default function Bar({ post }: BarProps): JSX.Element {
  return (
    <div className="relative w-32 h-80">
      <div className="absolute top-0 left-0 w-full text-center text-2xl font-bold text-gray-500">
        ${post.price}
      </div>

      <div className="mt-10 w-full h-[calc(100%-2.5rem)] bg-gray-100 rounded-2xl">
      </div>
    </div>
  );
}
