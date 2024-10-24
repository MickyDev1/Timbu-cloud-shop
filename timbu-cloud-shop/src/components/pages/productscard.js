import Image from 'next/image';

const ProductCard = ({ product }) => (
  <div className="product-card">
    <Image src={product.image} alt={product.name} width={200} height={200} />
    <h3>{product.name}</h3>
    <p>${product.price}</p>
  </div>
);

export default ProductCard;
