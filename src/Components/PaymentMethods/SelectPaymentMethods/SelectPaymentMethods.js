import React, { useState, useEffect, useRef } from "react";
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

export const SelectPaymentMethods = ({ setOpenPaymentModal }) => {
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref?.current?.contains(event.target)) {
        return;
      }
      setOpenPaymentModal(false);
    };
    document.body.addEventListener("click", onBodyClick);
    // removes/turns off event listener / when removing dropdown on app.js ref.current can no longer be refered to (creates error with null.contains)
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div className="selectPaymentMethods__background">
      <div className="selectPaymentMethods" ref={ref}>
        <div className="selectPaymentMethods__header">
          <h4>Add Account</h4>
          <CloseIcon
            fontSize="large"
            className="selectPaymentMethods__close-icon"
            onClick={() => setOpenPaymentModal(false)}
          />
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
          icon={<img src={paypal} alt="" />}
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
          icon={<img src={wiretransfer} alt="" />}
          description="Use a wire transfer to transfer cash into or out of you account. Typically used for large single transfers"
        />
      </div>
    </div>
  );
};
