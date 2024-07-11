import React, { useState, useEffect } from "react";
import { products } from "../Product";
import ProductCart from "../Components/ProductCart";
import HeroPage from "./HeroPage";
import Dropdown from "../Components/Dropdown";

const Home = () => {
  const [selected, setSelected] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(products);

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
                <li className="">12</li>
                <li className="">18</li>
                <li className="">24</li>
              </ul>
            </div>
          </div>
          <div className="gridItems">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, key) => (
                <ProductCart key={key} data={product} />
              ))
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
