
export const GetUserBasket = async (hashedId: string) => {
  const response = await fetch(`${process.env.BASE_URL}orders`, {
    cache: "no-store",
    headers: {
      Authorization: hashedId,
    },
  });

  if (!response.ok) {
    throw new Error("cant get basket from server");
  }

  const {orders} = await response.json();

  return orders;
};
