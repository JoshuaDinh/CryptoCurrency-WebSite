import React, { useState } from "react";
import "./paymentMethods.css";
import { NoPaymentMethods } from "./NoPaymentMethods/NoPaymentMethods";
import { SelectPaymentMethods } from "./SelectPaymentMethods/SelectPaymentMethods";
import AccountHeader from "../Account/AccountHeader";

const PaymentMethods = () => {
  const [openPaymentModal, setOpenPaymentModal] = useState(false);

  return (
    <div className="paymentMethods">
      <AccountHeader accountTitle="Payment Methods" />
      <NoPaymentMethods setOpenPaymentModal={setOpenPaymentModal} />
      {openPaymentModal && (
        <SelectPaymentMethods setOpenPaymentModal={setOpenPaymentModal} />
      )}
    </div>
  );
};

export default PaymentMethods;
