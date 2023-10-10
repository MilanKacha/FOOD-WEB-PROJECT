export function fetchAllRestorant(subcategory) {
  return new Promise(async (resolve) => {
    let apiUrl = "/api/v1/restorant";

    if (subcategory) {
      apiUrl += `?subcategory=${subcategory}`;
    }

    const res = await fetch(apiUrl);
    const data = await res.json();
    resolve({ data });
  });
}

export function fetchAllProductsByRestorantId(restaurantId) {
  return new Promise(async (resolve, reject) => {
    try {
      const apiUrl = `/api/v1/restorant/${restaurantId}/products`;
      const res = await fetch(apiUrl);

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();
      resolve({ data });
    } catch (error) {
      reject(error);
    }
  });
}

export function fetchRestaurantById(id) {
  return new Promise(async (resolve) => {
    const res = await fetch(`/api/v1/restorant/${id}`);
    const data = await res.json();
    resolve({ data });
  });
}

export function fetchAllProduct() {
  return new Promise(async (resolve) => {
    const res = await fetch("/api/v1/product/all");
    const data = await res.json();
    resolve({ data });
  });
}
