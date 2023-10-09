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

// export function fetchItemsByUserId() {
//   return new Promise(async (resolve) => {
//     const token = Cookies.get("jwt") || null;
//     const res = await fetch("http://localhost:8081/api/v1/cart", {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//       withCredentials: true,
//     });
//     const data = await res.json();
//     resolve({ data });
//   });
// }

export async function fetchItemsByUserId() {
  try {
    const token = Cookies.get("jwt") || null;
    console.log(token);

    if (!token) {
      console.log("User is not logged in");
    }

    const res = await fetch("http://localhost:8081/api/v1/cart", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      credentials: "include", // Use 'include' to include cookies
    });

    if (!res.ok) {
      throw new Error("Failed to fetch cart items");
    }

    const data = await res.json();
    return { data };
  } catch (error) {
    // Handle errors gracefully
    return { error: error.message };
  }
}

export function deleteItemFromCart(itemId) {
  if (!itemId) {
    // Handle the case where itemId is undefined or null.
    return Promise.resolve({ data: { id: itemId } });
  }

  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8081/api/v1/cart/" + itemId, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    const data = await res.json();

    resolve({ data: { id: itemId } });
  });
}

export async function resetCart() {
  return new Promise(async (resolve) => {
    const token = Cookies.get("jwt") || null;
    const res = await fetch("http://localhost:8081/api/v1/cart", {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    });

    if (res.status === 200) {
      // Successful reset (no JSON data to parse)
      resolve({ status: "success" });
    } else {
      // Handle other status codes here if needed
      resolve({ status: "error", message: "Reset failed" });
    }
  });
}

export function updateCart(update) {
  return new Promise(async (resolve) => {
    // const token = Cookies.get("jwt") || null;
    const res = await fetch("http://localhost:8081/api/v1/cart/" + update.id, {
      method: "PATCH",
      body: JSON.stringify(update),
      headers: {
        "content-type": "application/json",
        // Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    resolve({ data });
  });
}
