import styles from "./sidebar.module.css";
import GTLogo from "../../assets/gt.svg";
import { Transaction } from "../transaction/transaction";
import RightArrow from "../../assets/rightCaret.svg";
import FormatSquare from "../../assets/format-square.svg";

interface BankProps {
  bank: any;

}

export const Sidebar: React.FC<BankProps> = ({ bank }) => {
  const d = new Date();
  let day = d.getDate();
  let month = d.getMonth();
  let year = d.getFullYear();

  let suffix;
  switch (day) {
    case 1:
      suffix = "st";
      break;
    case 2:
      suffix = "nd";
      break;

    default:
      suffix = "th";
      break;
  }

  let monthText;
  switch (month) {
    case 0:
      monthText = "January";
      break;

    case 1:
      monthText = "February";
      break;
    case 2:
      monthText = "March";
      break;
    case 3:
      monthText = "April";
      break;
    case 4:
      monthText = "May";
      break;
    case 5:
      monthText = "June";
      break;
    case 6:
      monthText = "July";
      break;
    case 7:
      monthText = "August";
      break;
    case 8:
      monthText = "September";
      break;
    case 9:
      monthText = "October";
      break;
    case 10:
      monthText = "November";
      break;
    case 11:
      monthText = "December";
      break;
    default:
      console.error("Error");
      break;
  }
  const logo = bank?bank.bankLogo:GTLogo
  const name = bank?bank.name:"Guarranty Trust Bank"
  return (
    <div className={styles.sidebar}>
      <div className={styles.activity}>
        <span>
          Activity Feed <i> - </i>{" "}
          <small style={{ color: "#65717C", fontSize: "0.87em" }}>
           {bank? bank.name : "GT Bank"} 
          </small>
        </span>

        <span style={{ display: "flex", flexDirection: "row" }}>
          <small style={{ marginRight: "0.8125em", color: "#02BA81" }}>
            Active{" "}
          </small>
          <li style={{ fontSize: "0.8125em", color: "#65717C" }}>
            Created 16days ago
          </li>
        </span>
      </div>
     {bank?<div id={styles.banner} style={{background:`${bank.color}`}}></div>:<div id={styles.banner}></div>} 
      <div className={styles.header}>
        <div>
          <img
            style={{
              borderRadius: "4px",
              width: "3.25em",
              marginTop: "-1.3125em",
            }}
            src={logo}
            alt=""
          />
        </div>
        <div className={styles.account_header}>
          <div>
            <div>{name}</div>
            <div style={{ color: "#65717C" }}>209630**83</div>
          </div>
          <div>
            <button id={styles.activeViews}>
              <span>Go to Account View</span>{" "}
              <img src={RightArrow} style={{ width: "1em" }} alt="" />
            </button>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "5%", width: "100%" }} />
      <div className={styles.mid}>
        <div className={styles.mid_labels}>
          <small
            style={{
              color: "#65717C",
              fontSize: "0.87em",
            }}
          >
            Total Flow
          </small>
          <small
            style={{
              color: "#65717C",
              fontSize: "0.87em",
            }}
          >
            Last Activity Date
          </small>
          <small
            style={{
              color: "#65717C",
              fontSize: "0.87em",
            }}
          >
            Linked Branch
          </small>
        </div>

        <div className={styles.mid_values}>
          <div>₦77,823.00</div>

          <div style={{ marginLeft: "5%" }}>
            {day + suffix}
            {"\u00A0"}
            {monthText}.{"\u00A0"}
            {year}
          </div>

          <div id={styles.linked_branch}>
            <img src={FormatSquare} alt="" />
            <span
              style={{
                color: "#EA8A15",
              }}
            >
              Dodo - Lekki II
            </span>
          </div>
        </div>
      </div>
      <hr style={{ marginTop: "5%", width: "100%" }} />
      <div className={styles.transactions_header}>
        <span
          style={{
            color: "#65717C",
            fontSize: "0.87em",
          }}
        >
          Transaction Details
        </span>
        <span
          style={{
            color: "#65717C",
            fontSize: "0.87em",
          }}
        >
          Amount
        </span>
        <span
          style={{
            color: "#65717C",
            fontSize: "0.87em",
            marginLeft: "5%",
          }}
        >
          Date
        </span>
      </div>
      <Transaction
        name="Olaoluwa S."
        amount="6,720.00"
        day="Today"
        month=""
        time="8mins ago"
      />
      <Transaction
        name="Olaoluwa S."
        amount="6,720.00"
        day="13th"
        month="Aug"
        time="3:15PM"
      />
      <Transaction
        name="Olaoluwa S."
        amount="10,720.00"
        day="13th"
        month="Aug"
        time="3:15PM"
      />
      <Transaction
        name="Olaoluwa S."
        amount="6,720.00"
        day="13th"
        month="Aug"
        time="3:15PM"
      />
      <Transaction
        name="Olaoluwa S."
        amount="6,720.00"
        day="13th"
        month="Aug"
        time="3:15PM"
      />
    </div>
  );
};
