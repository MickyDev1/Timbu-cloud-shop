import ProductCard from './ProductCard';

const ProductList = ({ products }) => (
  <div className="product-list">
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
);

export default ProductList;
