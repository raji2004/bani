import React from "react";
import styles from "./transaction.module.css";

export interface TransactionProps {
  name: string;
  amount: string;
  day: string;
  month: string;
  time: string;
}
export const Transaction: React.FC<TransactionProps> = (props) => {
  return (
    <div className={styles.transaction}>
      <span>{props.name}</span>
      <span>₦{props.amount}</span>
      <span style={{ marginLeft: "5%" }}>
        {props.day + " "} {props.month + " "} - {props.time}
      </span>
    </div>
  );
};
