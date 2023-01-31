import styles from "./home.module.css";
import logo from "../../assets/logo.svg";
import notifications from "../../assets/notifications.svg";
import profile from "../../assets/profile.svg";
import acc from "../../assets/acc.svg";
import minfo from "../../assets/minfo.svg";
import manage from "../../assets/manage.svg";
import { BankInfo, Dashboard, Nav } from "../../Components";
import { Banks } from "./banks";
import { Sidebar } from "../../Components";
import { useId, useState } from "react";

export const Home: React.FC = () => {
  const [activeId, setActiveId] = useState<string>("");
  const [activeBank, setActiveBank] = useState<any>(undefined);

  return (
    <div className={styles.container}>
      <div className={styles.Nav}>
        <img src={logo} alt="t" />
        <div className={styles.profile}>
          <img src={notifications} alt="" />
          <img src={profile} alt="" />
        </div>
      </div>
      <div className={styles.main}>
        <Nav />
        <div className={styles.balance}>
          <Dashboard />
          <div className={styles.myinfo}>
            <div className={styles.acc}>
              <img src={acc} alt="" style={{ width: "100%" }} />

              <div className={styles.minfo}>
                <img src={minfo} alt="" style={{ width: "100%" }} />
                <div className={styles.title}>
                  <h4>Lekki II</h4>

                  <img src={manage} alt="" style={{ width: "14%" }} />
                </div>
                <div className={styles.td}>
                  <p style={{ marginLeft: -77 }}>Bank Name</p>
                  <p style={{ marginLeft: 10 }}>Virtual Account</p>
                  <p>Total Inflow</p>
                </div>
                {/* turn to components */}
                {Banks.map((bank) => {
                  const id = useId();
                  return (
                    <BankInfo
                      key={id}
                      onClick={() => setActiveBank(bank)}
                      active={activeBank === bank ? true : false}
                      bankName={bank.name}
                      bankLogo={bank.bankLogo}
                      bankLocation={bank.bankLocation}
                    />
                  );
                })}
              </div>
            </div>
            {!activeBank ? null : (
              <div className={styles.rightContainer}>
                <table>
                  <thead>
                    <td>Transaction Details</td>
                    <td>Amount</td>
                    <td>Date</td>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Olaoluwa S.</td>
                    </tr>
                    <tr>
                      <td>Olaoluwa S.</td>
                    </tr>
                    <tr>
                      <td>Olaoluwa S.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
