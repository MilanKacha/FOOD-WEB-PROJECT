export function fetchAllRestorant() {
  return new Promise(async (resolve) => {
    const res = await fetch("http://localhost:8081/api/v1/restorant");
    const data = await res.json();
    resolve({ data });
  });
}

export function fetchAllProductsByRestorantId(restaurantId) {
  return new Promise(async (resolve) => {
    const apiUrl = `http://localhost:8081/api/v1/restorant/${restaurantId}/products`;
    const res = await fetch(apiUrl);
    const data = await res.json();
    resolve({ data });
  });
}

export function fetchRestaurantById(id) {
  return new Promise(async (resolve) => {
    const res = await fetch(`http://localhost:8081/api/v1/restorant/${id}`);
    const data = await res.json();
    resolve({ data });
  });
}
