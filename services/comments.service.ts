import db from "../providers/db";

export interface ICreateComment {
  comment: string;
  postId: number;
}

export type IComment = ICreateComment & {
  id: number;
};

export const createComment = async (
  { comment, postId }: ICreateComment,
  userId: number
): Promise<IComment> => {
  const newComment = await db.comments.create({
    data: { comment, postId, authorId: userId },
  });
  return newComment;
};

export const getComments = async (): Promise<IComment[]> => {
  return db.comments.findMany();
};
