import React, { useState, useEffect } from "react";
import { products } from "../Product";
import ProductCart from "../Components/ProductCart";
import HeroPage from "./HeroPage";
import Dropdown from "../Components/Dropdown";

const Home = () => {
  const [selected, setSelected] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [productsToShow, setProductsToShow] = useState(12); // Default to showing 12 products
  const [activeFilter, setActiveFilter] = useState(12); // Default active filter

  useEffect(() => {
    if (selected === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(selected.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [selected]);

  const handleFilterClick = (num) => {
    setProductsToShow(num);
    setActiveFilter(num);
  };

  return (
    <div>
      <HeroPage />
      <div className="productGrid-container">
        <div className="dropdown-container">
          <Dropdown selected={selected} setSelected={setSelected} />
        </div>
        <div className="items-filter">
          <div className="filter-Num">
            <h5> Show</h5>
            <div>
              <ul>
                <li
                  className={activeFilter === 12 ? "active" : ""}
                  onClick={() => handleFilterClick(12)}
                >
                  12
                </li>
                <li
                  className={activeFilter === 10 ? "active" : ""}
                  onClick={() => handleFilterClick(10)}
                >
                  10
                </li>
                <li
                  className={activeFilter === 5 ? "active" : ""}
                  onClick={() => handleFilterClick(5)}
                >
                  5
                </li>
              </ul>
            </div>
          </div>
          <div className="gridItems">
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice(0, productsToShow)
                .map((product, key) => <ProductCart key={key} data={product} />)
            ) : (
              <div className="no-products-found">No products found</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
