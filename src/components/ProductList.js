import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const Product = ({ item }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(item);
  };

  return (
    <div>
      {/* Product details */}
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
