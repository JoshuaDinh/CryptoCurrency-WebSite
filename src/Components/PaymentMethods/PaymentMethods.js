import React, { useState, useEffect } from "react";
import "./paymentMethods.css";
import { NoPaymentMethods } from "./NoPaymentMethods/NoPaymentMethods";
import { SelectPaymentMethods } from "./SelectPaymentMethods/SelectPaymentMethods";

const PaymentMethods = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <div className="paymentMethods">
      <h2>PaymentMethods</h2>
      <hr></hr>
      <NoPaymentMethods setOpenPaymentModal={() => setOpenPaymentModal(true)} />
      {openPaymentModal && <SelectPaymentMethods />}
    </div>
  );
};

export default PaymentMethods;
