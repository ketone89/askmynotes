import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mouse", price: 1000 },
  { id: 3, name: "Keyboard", price: 2000 }
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h1>Shopping Cart</h1>

      <div data-testid="products">
        {products.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
            <p>₹{product.price}</p>
            <button onClick={() => addToCart(product)}>
              Add {product.name}
            </button>
          </div>
        ))}
      </div>

      <hr />

      {cart.length === 0 ? (
        <p data-testid="empty">Cart is Empty</p>
      ) : (
        <div data-testid="cart">
          {cart.map((item, index) => (
            <div key={index}>
              <span>
                {item.name} - ₹{item.price}
              </span>

              <button onClick={() => removeFromCart(index)}>
                Remove {item.name}
              </button>
            </div>
          ))}
        </div>
      )}

      <p data-testid="total">
        Total: ₹{total}
      </p>
    </>
  );
}

export default App;