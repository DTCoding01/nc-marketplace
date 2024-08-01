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
  if (searchQuery.category !== "all") {
    queryString += `?category_name=${searchQuery.category}&`;
  } else {
    queryString += "?";
  }

  queryString += `sort_by=${searchQuery.sort_by}&order=${searchQuery.order}`;
  console.log(queryString);

  return api.get(queryString).then(({ data }) => {
    return data.items;
  });
}
