import { useEffect, useState } from "react";
import { getCategories } from "../../api";
function Search({ setSearchQuery, setSearchItem }) {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then((categories) => {
      setCategories([{ category_name: "All" }, ...categories]);
    });
  }, []);

  function handleChange(e) {
    const className = e.target.className;
    setSearchQuery((currSearchQuery) => {
      const newSearchQuery = { ...currSearchQuery };
      newSearchQuery[className] = e.target.value;
      return newSearchQuery;
    });
  }
  function handleSearchChange(e) {
    setSearchItem(e.target.value)
  }
  return (
    <form className="search">
      <label htmlFor="search-items">
        <input onChange={handleSearchChange} id="search-items"></input>
      </label>
      <section className="query-selectors">
        <label htmlFor="categories">
          <select name="categories" id="categories" onChange={handleChange} className="category">
            {categories.map((category) => {
              return (
                <option
                  key={category.category_name}
                  value={category.category_name}
                >
                  {category.category_name}
                </option>
              );
            })}
          </select>
        </label>
        <label htmlFor="sort-query">
          <select name="sort-query" id="sort-query" onChange={handleChange} className="sort_by">
            <option value="price">Price</option>
            <option value="item_name">Name</option>
            <option value="item_id">Item ID</option>
          </select>
        </label>
        <label htmlFor="order-query">
          <select name="order-query" id="order-query" onChange={handleChange} className="order">
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </label>
      </section>
    </form>
  );
}

export default Search;
