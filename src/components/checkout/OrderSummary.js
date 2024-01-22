import React from 'react';
import { useCart } from "../../utils/hooks/useCart";

function OrderSummary({ onPaymentComplete }) {
  const { subtotal, delivery, discount, defaultTotal, clearCart } = useCart();

  const handleCompletePayment = () => {
    console.log('Virtual payment completed.');

    clearCart();

    onPaymentComplete();
  };

  return (
    <div className='order-summary'>
      <div className="space-between">
        <p>Subtotal</p>
        <p>{subtotal}</p>
      </div>
      {discount > 0 && (
        <div className="space-between">
          <p>Discount</p>
          <p>-10%</p>
        </div>
      )}
      <div className="space-between">
        <p>Delivery</p>
        <p>{delivery}</p>
      </div>
      <div className="line"></div>
      <div className="space-between bold">
        <p>Total</p>
        <p>{defaultTotal +" DH"}</p>
      </div>
      <div>
        <p>This is a virtual payment. No real payment is processed.</p>
        <button onClick={handleCompletePayment}>Complete Virtual Payment</button>
      </div>
    </div>
  );
}

export default OrderSummary;
