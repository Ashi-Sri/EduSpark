import React, { useContext } from 'react';
import { CartContext } from './cartContext';
import './Cart.css';

const CartPage = () => {
  const { cart, handleRemoveFromCart } = useContext(CartContext);

  const calculateTotalPrice = () => {
    return cart.reduce((total, course) => total + (course.price || 0), 0);
  };

  return (
    <div className="cart-page">
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <div className="cart-container">
            {cart.map((course, index) => (
              <div className="cart-item" key={index}>
                <img src={course.image} alt={course.title} className="cart-item-image" />
                <div className="cart-item-details">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  {course.price && <p>Price: ${course.price}</p>}
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveFromCart(course.id)}
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
          {/* <div className="cart-total">
            <p>Total: ${calculateTotalPrice()}</p>
            <button className="checkout-button">Checkout</button>
          </div> */}
        </div>
      )}
    </div>
  );
};

export default CartPage;