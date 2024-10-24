import CartSummary from '../components/CartSummary';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Product 1', price: 99.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 89.99, quantity: 1 },
    // Add more cart items as needed
  ];

  return (
    <div>
      <h1>Cart</h1>
      <CartSummary cartItems={cartItems} />
    </div>
  );
};

export default Cart;
