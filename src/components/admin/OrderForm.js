import React from 'react';

function OrderForm({ selectedOrder, onStatusChange, onSaveClick }) {
  const handleStatusChange = (event) => {
    const newStatus = parseInt(event.target.value);
    onStatusChange(newStatus);
  };

  return (
    <>
      <div className="divider">
        <label>
          Update Status
          <select name="status" value={selectedOrder?.status} onChange={handleStatusChange}>
            <option value={1} disabled={selectedOrder?.status === 0}>
              Pending
            </option>
            <option value={2} disabled={selectedOrder?.status === 2}>
              Shipped
            </option>
          </select>
        </label>

        <label>
          Total Price
          <input value={selectedOrder?.totalPrice || ""} readOnly />
        </label>
      </div>

      <div className="divider">
        <button onClick={onSaveClick}>Save Changes</button>
      </div>
    </>
  );
}

export default OrderForm;
