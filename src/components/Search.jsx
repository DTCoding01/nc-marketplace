import { useEffect, useState } from "react";
import { getCategories } from "../../api";
function Search({ setSearchQuery }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categories) => {
      setCategories([{ category_name: "all" }, ...categories]);
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

  //   function handleSortByChange(e) {
  //     setSearchQuery((currSearchQuery) => {
  //       return { ...currSearchQuery, sort_by: e.target.value };
  //     });
  //   }

  //   function handleSortByChange(e) {
  //     setSearchQuery((currSearchQuery) => {
  //       return { ...currSearchQuery, sort_by: e.target.value };
  //     });
  //   }

  return (
    <form className="search">
      <label htmlFor="search-items">
        <input id="search-items"></input>
      </label>
      <section className="query-selectors">
        <select onChange={handleChange} className="category">
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
        <select onChange={handleChange} className="sort_by">
  
          <option value={"price"}>Price</option>
          <option value={"item_name"}>Name</option>
          <option value={"item_id"}>Item ID</option>
        </select>
        <select onChange={handleChange} className="order">
          <option value={"asc"}>Ascending</option>
          <option value={"desc"}>Descending</option>
        </select>
      </section>
    </form>
  );
}

export default Search;
