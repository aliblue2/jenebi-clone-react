
export const GetCommentsByProductId = async (productId: string) => {
  const response = await fetch(`${process.env.BASE_URL}comments/${productId}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("cant getting comments ");
  }

  const { comments } = await response.json();

  return comments;
};
