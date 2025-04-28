"use server";

export const addToBasketProductHandler = async (
  hashedId: string,
  productId: string
) => {
  const response = await fetch(`${process.env.BASE_URL}orders/${productId}`, {
    method: "POST",
    headers: {
      Authorization: hashedId,
    },
  });

  if (!response.ok) {
    throw new Error("cant add new product to basket");
  }

  const { message } = await response.json();
  return message;
};

export const RemoveProductFromBasketHandler = async (
  hashedId: string,
  productId: string
) => {
  const response = await fetch(`${process.env.BASE_URL}orders/${productId}`, {
    method: "DELETE",
    headers: {
      Authorization: hashedId,
    },
  });

  if (!response.ok) {
    throw new Error("cant add new product to basket");
  }

  const { message } = await response.json();
  return message;
};
