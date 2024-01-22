import { useState } from 'react';

export const useStatusString = () => {
  return (status) => {
    const statusMap = {
      1: { statusString: 'Pending', className: 'yellow' },
      2: { statusString: 'Shipped', className: 'green' }
    };
    const statusObj = statusMap[status] ?? { statusString: '', className: '' };
    return <p className={`txt ${statusObj.className}`}>{statusObj.statusString}</p>;
  };
};

export const useStock = () => {
  return (stock) => {
    const stockMap = {
      true: { statusString: 'In stock', className: 'green' },
      false: { statusString: 'Out of stock', className: 'red' },
    };
    const stockObj = stockMap[stock] ?? { statusString: '', className: '' };
    return <p className={`txt ${stockObj.className}`}>{stockObj.statusString}</p>;
  };
};

export default function useToggle(initialValue = false) {
  const [toggled, setToggled] = useState(initialValue);

  function toggle() {
    setToggled(!toggled);
  }

  function isToggled() {
    return toggled;
  }

  return { toggle, isToggled };
}

export function formatPrice(price) {
  return price.toLocaleString('ar-MA', { style: 'currency', currency: 'MAD' });
}

export function formatDate(date) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(date).toLocaleDateString('en-US', options);
}

export function formatDateTime(dateTime) {
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  return new Date(dateTime).toLocaleDateString('en-US', options);
}

