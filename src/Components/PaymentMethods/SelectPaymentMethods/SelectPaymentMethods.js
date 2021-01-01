import React, { useState } from "react";
import "./selectPaymentMethods.css";
import CloseIcon from "@material-ui/icons/Close";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import PaymentIcon from "@material-ui/icons/Payment";
import paypal from "../../../images/paypal.png";
import wiretransfer from "../../../images/wiretransfer.png";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

export const PaymentSelection = ({
  title,
  subTitle,
  description,
  Recommended,
  icon,
}) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="paymentSelection"
      onMouseEnter={() => setSelected(true)}
      onMouseLeave={() => setSelected(false)}
    >
      <div className="paymentSelection__title">
        {icon}
        <h5>{title}</h5>
      </div>
      <p
        className={`"paymentSelection__subTitle" ${
          Recommended && "paymentSelection__bank"
        }`}
      >
        {subTitle}
      </p>
      <div className="paymentSelection__description-container">
        <p className="paymentSelection__description">{description}</p>
        <ArrowForwardIosIcon
          className={`paymentSelection__arrow-icon ${
            selected && "paymentSelection__selected"
          }`}
        />
      </div>
      <p className="paymentSelection__recommended">{Recommended}</p>
    </div>
  );
};

export const SelectPaymentMethods = () => {
  return (
    <div className="selectPaymentMethods">
      <div className="selectPaymentMethods__header">
        <h4>Add Account</h4>
        <CloseIcon fontSize="large" />
      </div>
      <PaymentSelection
        title="Bank Account"
        icon={<AccountBalanceIcon />}
        subTitle="Invest large amounts"
        description="Use a bank account to buy crypto and deposit or withdraw cash. Buy orders process isntantly"
        Recommended="Recommended"
      />
      <PaymentSelection
        title="PayPal"
        icon={<img src={paypal} />}
        subTitle="For withdrawls only"
        description="Link your account to isntantly withdraw funds from your account to PayPal. Deposits are not currently available."
      />
      <PaymentSelection
        title="Debit Card"
        icon={<PaymentIcon />}
        subTitle="Invest small amounts"
        description="Use any Visa or Mastercard debit card to make small investments. Add a bank or waller to sell."
      />
      <PaymentSelection
        title="Wire Transfer"
        icon={<img src={wiretransfer} />}
        description="Use a wire transfer to transfer cash into or out of you account. Typically used for large single transfers"
      />
    </div>
  );
};
