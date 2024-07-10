import React, { useState } from "react";
import { products } from "../Product";
import ProductCart from "../Components/ProductCart";
import HeroPage from "./HeroPage";
import Dropdown from "../Components/Dropdown";

const Home = () => {
  const [selected, setSelected] = useState("");
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
                <ol className="">12</ol>
                <ol className="">18</ol>
                <ol className="">24</ol>
              </ul>
            </div>
          </div>
          <div className="gridItems">
            {products.map((product, key) => (
              <ProductCart key={key} data={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// const filteredItems =
//   selected === "All"
//     ? gridItems.slice(0, numItemsToShow)
//     : gridItems
//         .filter(
//           (item) =>
//             item.title.toLowerCase().includes(selected.toLowerCase()) ||
//             item.category === selected
//         )
//         .slice(0, numItemsToShow);
