const products = [
  { title: "Orange🍊", isFruits: true, id: 1 },
  { title: "Aubergin🍆", isFruits: false, id: 2 },
  { title: "Carrot🥕", isFruits: false, id: 3 },
];

export default function MarketList() {
  const listItems = products.map((product) => (
    <li
      key={product.id}
      style={{
        color: product.isFruits ? "orange" : "lightgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <li>{listItems}</li>;
}
