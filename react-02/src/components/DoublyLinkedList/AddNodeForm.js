import React, { useState } from "react";
import "../../css/red/linkList.css";
const AddNodeForm = (props) => {
  const [subject, setSubject] = useState("");
  const [amount, setAmount] = useState("");

  const createNode = (e) => {
    e.preventDefault();
    props.onCreate(subject, amount);
    if (subject && amount) {
      setSubject("");
      setAmount("");
    }
  };
  return (
    <div>
      <p>Add Node</p>
      <form onSubmit={props.addNode} className="node-form">
        <div className="input-box">
          <label htmlFor="subject">Subject</label>
          <input
            name="subject"
            value={props.subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            placeholder="Subject"
          />
        </div>
        <div className="input-box">
          <label htmlFor="amount">Amount</label>
          <input
            name="amount"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Amount"
          />
        </div>
        <button className="submit-btn" onClick={createNode}>
          add Node
        </button>
      </form>
    </div>
  );
};

export { AddNodeForm as default };
