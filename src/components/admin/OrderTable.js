import React from 'react';
import orderApi from '../../utils/api/orderApi'; 

function OrderTable({ user, selectedOrder, onStatusChange, onSaveChanges }) {
  const handleStatusChange = (event) => {
    const newStatus = parseInt(event.target.value);
    updateStatusInBackend(selectedOrder.orderID, newStatus);
    onStatusChange(newStatus);
  };

  const updateStatusInBackend = (orderId, newStatus) => {
    orderApi.updateOrder(orderId, { status: newStatus })
      .then((response) => {
        console.log('Order status updated in the backend:', response);
      })
      .catch((error) => {
        console.error('Error updating order status:', error);
      });
  };

  return (
    <>
      <div className="divider">
        <label>
          Update Status
          <select name="status" value={selectedOrder?.status} onChange={handleStatusChange}>
            <option value={1} disabled={selectedOrder?.status === 1}>
              Pending
            </option>
            <option value={2} disabled={selectedOrder?.status === 2}>
              Shipped
            </option>
          </select>
        </label>

        <label>
          Total Price
          <input value={selectedOrder?.totalPrice+" DH"} readOnly />
        </label>
      </div>

      <div className="divider">
        <button onClick={onSaveChanges}>Save Changes</button>
      </div>
    </>
  );
}

export default OrderTable;
