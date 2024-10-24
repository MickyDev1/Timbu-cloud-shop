const CartSummary = ({ cartItems }) => (
    <div className="cart-summary">
      <h2>Cart Summary</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${cartItems.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
    </div>
  );
  
  export default CartSummary;
  