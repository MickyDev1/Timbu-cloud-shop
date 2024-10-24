import ProductList from '../components/ProductList';

const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', price: 99.99, image: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 89.99, image: '/images/product2.jpg' },
    // Add more products as needed
  ];

  return (
    <div>
      <h1>Timbu Cloud Shop</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;
