import React from "react";


function SearchForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
  };
  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-input search-input"
          name="search"
          placeholder="dog"
        />
        <button type="submit" className="btn">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
