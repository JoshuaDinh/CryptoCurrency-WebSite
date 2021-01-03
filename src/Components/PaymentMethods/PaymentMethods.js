import React, { useState, useEffect, useRef } from "react";
import "./paymentMethods.css";
import { NoPaymentMethods } from "./NoPaymentMethods/NoPaymentMethods";
import { SelectPaymentMethods } from "./SelectPaymentMethods/SelectPaymentMethods";

const PaymentMethods = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <div className="paymentMethods">
      <h2>PaymentMethods</h2>
      {/* <button
        onClick={() => setOpenPaymentModal(true)}
        className="noPaymentMethods__button"
      >
        Add a payment method
      </button> */}
      <hr></hr>
      <NoPaymentMethods setOpenPaymentModal={setOpenPaymentModal} />
      {openPaymentModal && (
        <SelectPaymentMethods setOpenPaymentModal={setOpenPaymentModal} />
      )}
    </div>
  );
};

export default PaymentMethods;
