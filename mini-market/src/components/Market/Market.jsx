function FilterableProductTable({ products }) {
  return (
    <div>
      <SearchBar />
      <ProductTable products={products} />
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

function SearchBar() {
  return (
    <form>
      <label>Which Product are you looking for?</label>
      <input type="text" placeholder="Search.." />
      <lebel>
        <input type="checkbox" />
        Only show product in stock
      </lebel>
    </form>
  );
}

function ProductTable() {
  return <></>;
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
