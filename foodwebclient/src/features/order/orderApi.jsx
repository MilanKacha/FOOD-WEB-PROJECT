import Cookies from "js-cookie";

export function createOrder(order) {
  return new Promise(async (resolve) => {
    const res = await fetch("/api/v1/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();
    resolve({ data });
  });
}

export function fetchOrderByUserId() {
  return new Promise(async (resolve) => {
    const token = Cookies.get("jwt") || null;
    const res = await fetch("/api/v1/order", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    const data = await res.json();
    resolve({ data });
  });
}
