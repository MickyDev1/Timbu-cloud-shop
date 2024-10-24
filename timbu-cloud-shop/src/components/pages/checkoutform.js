import { useState } from 'react';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expirationDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="address" placeholder="Address" onChange={handleChange} required />
      <input type="text" name="cardNumber" placeholder="Card Number" onChange={handleChange} required />
      <input type="text" name="expirationDate" placeholder="Expiration Date" onChange={handleChange} required />
      <input type="text" name="cvv" placeholder="CVV" onChange={handleChange} required />
      <button type="submit">Checkout</button>
    </form>
  );
};

export default CheckoutForm;
