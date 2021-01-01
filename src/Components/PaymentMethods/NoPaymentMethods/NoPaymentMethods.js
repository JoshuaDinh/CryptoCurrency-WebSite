import React from "react";
import "./noPaymentMethods.css";

export const NoPaymentMethods = ({ setOpenPaymentModal }) => {
  return (
    <div className="noPaymentMethods">
      <p>You haven't added any payment methods yet</p>
      <button
        onClick={() => setOpenPaymentModal(true)}
        className="noPaymentMethods__button"
      >
        Add a payment method
      </button>
    </div>
  );
};
