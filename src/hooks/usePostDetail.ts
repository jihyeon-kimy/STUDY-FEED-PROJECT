import { getPostsReducer, selectPosts } from "../store/postSlice";
import { useAppDispatch, useAppSelector } from "./useRedux";

export const usePostDetail = (id: number) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPosts);

  if (posts?.length === 0) {
    dispatch(getPostsReducer());
  }
  const post = posts && posts[id];

  return post;
};
