import Cookies from "js-cookie";

export function addToCart(item) {
  return new Promise(async (resolve) => {
    const token = Cookies.get("jwt") || null;
    const res = await fetch("http://localhost:8081/api/v1/cart", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    resolve({ data });
  });
}
