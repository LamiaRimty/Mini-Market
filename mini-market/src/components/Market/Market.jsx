import { useState } from "react";

function FilterableProductTable({ products }) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <div className="MarketPlace">
      <SearchBar filterText={filterText} inStockOnly={inStockOnly} />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}
const PRODUCTS = [
  { category: "Vegtables", name: "Brocolli🥦", stocked: true, price: "3$" },
  { category: "Vegtables", name: "Aubergin🍆", stocked: false, price: "0.85$" },
  { category: "Vegtables", name: "Carrot🥕", stocked: false, price: "1$" },
  { category: "Fruits", name: "Watermelon🍉", stocked: true, price: "4$" },
  { category: "Fruits", name: "Mango🥭", stocked: false, price: "1.5$" },
  { category: "Fruits", name: "Strawberry🍓", stocked: false, price: "2$" },
];

function SearchBar({ filterText, inStockOnly }) {
  return (
    <form>
      <label className="searchLabel">Which Product are you looking for?</label>
      <input type="text" placeholder="Search.." />
      <div>
        <lebel className="check-label">
          {" "}
          <input type="checkbox" value={filterText} />
          Only show product in stock
        </lebel>
      </div>
    </form>
  );
}

function ProductRow({ product }) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "orange" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}

function ProductCategoryRow({ category }) {
  return (
    <tr colSpan="2">
      <th>{category}</th>
    </tr>
  );
}

function ProductTable({ products, inStockOnly, filterText }) {
  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table>
      <thread>
        <tr>
          <th>Name</th>

          <th>Price</th>
        </tr>
      </thread>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default function MarketList() {
  return <FilterableProductTable products={PRODUCTS} />;
}
// export default function MarketList() {
//   const listItems = products.map((product) => (
//     <li
//       key={product.id}
//       style={{
//         color: product.isFruits ? "orange" : "lightgreen",
//       }}
//     >
//       {product.title}
//     </li>
//   ));

//   return <ul>{listItems}</ul>;
// }
