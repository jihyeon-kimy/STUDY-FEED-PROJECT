import { useParams } from "react-router-dom";
import ItemDetail from "../Common/ItemDetail";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/useRedux";
import { selectPosts } from "../../store/postSlice";

const PostDetail = () => {
  const { postId } = useParams();
  const posts = useAppSelector(selectPosts);
  const post = posts && posts[+postId!];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ItemDetail
      title={post?.title}
      author={post?.creator || post?.author}
      date={post?.isoDate?.substr(0, 10)}
      content={post?.["content:encoded"] || post?.content}
    />
  );
};

export default PostDetail;
