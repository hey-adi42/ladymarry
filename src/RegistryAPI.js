// const api = "https://ladymarry.com/api";
// const api = "https://www.ladymarry.com"
const api = "/api"


// Generate a unique token for storing your bookshelf data on the backend server.
// let token = localStorage.token
// if (!token)
//   token = localStorage.token = Math.random().toString(36).substr(-8)
//
// const headers = {
//   'Accept': 'application/json',
//   'Authorization': token
// }
//
const headers = {
  Accept: "application/json"
};

export const get = productId =>
  fetch(`${api}/registry/products?product=${productId}`, { headers })
    .then(res => res.json())
    .then(data => data.results.products.product[0]);

export const getAll = weddingId =>
  fetch(`${api}/registry/detail?wedding=${weddingId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const getProfile = weddingId =>
  fetch(`${api}/users/me/weddings/${weddingId}`, { headers })
    .then(res => res.json())
    .then(data => data);

export const updateProduct = formData => {
  fetch(`${api}/registry/update-items`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  }).then(res => res.json());
};

export const search = query =>
  fetch(`${api}/search`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ query })
  })
    .then(res => res.json())
    .then(data => data.books);



// WEBPACK FOOTER //
// ./src/RegistryAPI.js