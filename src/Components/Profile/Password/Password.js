import React, { useState, useEffect, useRef } from "react";
import "./password.css";
import { Link } from "react-router-dom";

export const Modal = ({ setModalOpen }) => {
  const [oldPasswordChanged, setOldPasswordChanged] = useState(false);
  const [newPasswordChanged, setNewPasswordChanged] = useState(false);
  const [confirmedPasswordChanged, setConfirmedPasswordChanged] = useState(
    false
  );

  const ref = useRef();

  // closes modal when another element is clicked (event bubble*)
  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      setModalOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);
    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  return (
    <div className="password__modal">
      <form ref={ref} className="password__modal-form">
        <label>Old Password</label>
        <input
          type="password"
          onChange={() => setOldPasswordChanged(true)}
          className={`password__modal-input ${
            oldPasswordChanged && "password__modal-input-selected"
          }`}
        />
        <label>New Password</label>
        <input
          type="password"
          onChange={() => setNewPasswordChanged(true)}
          className={`password__modal-input ${
            newPasswordChanged && "password__modal-input-selected"
          }`}
        />
        <label>Confirm New Password</label>
        <input
          type="password"
          onChange={() => setConfirmedPasswordChanged(true)}
          className={`password__modal-input ${
            confirmedPasswordChanged && "password__modal-input-selected"
          }`}
        />
        <button className="password__save-button">Save</button>
      </form>
    </div>
  );
};

const Password = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="password">
      <div className="password__heading">
        <h5>ChangePassword</h5>
        <p>
          Enable 2-factor authentication in
          <Link to="/security"> Security Settings</Link>
        </p>
      </div>
      <button className="password__button" onClick={() => setModalOpen(true)}>
        Change Password
      </button>
      {modalOpen && <Modal setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Password;
