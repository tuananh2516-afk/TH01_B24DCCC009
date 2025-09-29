import {useState} from "react";

const products = [
  {id: 1, name: "Sản phẩm A", price: 100},
  {id: 2, name: "Sản phẩm B", price: 200},
  {id: 3, name: "Sản phẩm C", price: 300},
];

function ProductItem({product, addToCart}) {
  return (
    <div style={{border: "1px solid #ddd", padding: 10, marginBottom: 10}}>
      <h4>{product.name}</h4>
      <p>Giá: {product.price}đ</p>
      <button onClick={() => addToCart(product)}>Thêm vào giỏ</button>
    </div>
  );
}

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const total = cart.reduce((pre, cur) => pre + cur.price, 0);

  return (
    <div style={{padding: 20}}>
      <h2>
        Giỏ hàng: {cart.length} sản phẩm, tổng tiền: {total}
      </h2>
      {products.map((p) => (
        <ProductItem key={p.id} product={p} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default ShoppingCart;
