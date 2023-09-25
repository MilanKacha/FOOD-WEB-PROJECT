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

export function fetchItemsByUserId() {
  return new Promise(async (resolve) => {
    const token = Cookies.get("jwt") || null;
    const res = await fetch("http://localhost:8081/api/v1/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });
    const data = await res.json();
    resolve({ data });
  });
}

export function deleteItemFromCart(itemId) {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8081/api/v1/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();

    resolve({ data: { id: itemId } });
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    const token = Cookies.get("jwt") || null;
    const res = await fetch("http://localhost:8081/api/v1/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    resolve({ data });
  });
}
