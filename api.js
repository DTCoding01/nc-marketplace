import axios from "axios";

const api = axios.create({
  baseURL: "https://fe-nc-marketplace-api-3.onrender.com/api",
});

export function getCategories() {
  return api.get("/categories").then(({ data }) => {
    return data.categories;
  });
}

export function getItems(searchQuery) {
  let queryString = `/items`;
  if (searchQuery.category !== "All") {
    queryString += `?category_name=${searchQuery.category}&`;
  } else {
    queryString += "?";
  }

  queryString += `sort_by=${searchQuery.sort_by}&order=${searchQuery.order}`;

  return api.get(queryString).then(({ data }) => {
    return data.items;
  });
}
export function getUserByUsername(username) {
  return api.get(`/users/${username}`).then(({ data }) => {
    return data.user;
  });
}
export function getOrdersByUsername(username) {
  return api.get(`/users/${username}/orders`).then(({ data }) => {
    return data.items;
  });
}
export function getUserIdByUsername(username) {
  return api.get(`/users`).then(({ data }) => {
    const user = data.users.filter((user) => {
      return user.username === username;
    });
    return user[0].user_id;
  });
}
export function getListingsByUserId(id) {
  return api.get("/items").then(({ data: { items } }) => {
    const filteredListings = items.filter((item) => item.listed_by === id);
    return filteredListings
  });
}
export function getBasketByUsername(username) {
  return api.get(`/users/${username}/basket`).then(({data}) => {
    return data.items
  })
}
export function postItem(item) {
  const { price } = item;
  const formattedPrice = Number(price);
  const formattedItem = { ...item, price: formattedPrice };
  return api
    .post("/items", formattedItem)
    .then(({ data }) => {
      return data.item;
    })
    .catch((err) => {
      console.log(err);
    });
}

export function postUser(user) {
  return api
    .post("/users", user)
    .then(({ data }) => {
      return data.user;
    })
    .catch((err) => {
      console.log(err);
    });
}
export function postToBasket(username, itemId){
  return api.post(`/users/${username}/basket`, {item_id: itemId})
  .then(({data}) => {
    return data.item
  })
}

export function deleteListingByItemId(id) {
  return api.delete(`/items/${id}`)
}
export function deleteItemFromBasket(username, itemId) {
  return api.delete(`/users/${username}/basket/${itemId}`)
  .catch((err) => {
    console.log(err)
  })
}