import React from "react";
import styles from "./style.module.css"
import weclome from "../../assets/welcome.svg"
import compliance from "../../assets/compliance.svg"
import overview from "../../assets/overview.svg"
import product from "../../assets/products.svg"
import customer from "../../assets/customer.svg"
import order from "../../assets/order.svg"
import wallet from "../../assets/wallet.svg"
import transaction from "../../assets/transaction.svg"
import vacc from "../../assets/vacc.svg"
import live from "../../assets/live.svg"
import setting from "../../assets/setting.svg"
import audit from "../../assets/audit.svg"


export const Nav :React.FC=()=>{
    return(
        <div className={styles.Navbar}>
                    <ul className={styles.ul}>
                        <li> <img src={weclome} alt="" style={{ marginBottom: -3 }} />  Welcome</li>
                        <li><img src={compliance} alt="" style={{ marginBottom: -3 }} />  Compliance</li>
                        <li><img src={overview} alt="" style={{ marginBottom: -3 }} /> Overview</li>
                    </ul>
                    <h4 className={styles.head}>Buissness</h4>
                    <ul className={styles.ul}>
                        <li><img src={product} alt="" style={{ marginBottom: -3 }} /> Products</li>
                        <li><img src={customer} alt="" style={{ marginBottom: -3 }} /> Customer</li>
                        <li><img src={order} alt="" style={{ marginBottom: -3 }} /> Orders</li>
                    </ul>
                    <h4 className={styles.head}>Payment</h4>
                    <ul className={styles.ul}>
                        <li><img src={wallet} alt="" style={{ marginBottom: -3 }} /> Wallet</li>
                        <li><img src={transaction} alt="" style={{ marginBottom: -3 }} /> Transaction</li>
                        <li style={{ color: '#5444F2' }}><img src={vacc} alt="" style={{ marginBottom: -3 }} /> Virtual Account</li>
                        <p style={{ color: '#02BA81', fontSize: 12, marginLeft: 26, marginTop: -10, fontWeight: '300' }}>New</p>
                    </ul>

                    <div className={styles.last}>
                        <ul className={styles.ul}>
                            <li><img src={live} alt="" style={{ marginBottom: -3 }} /> Live Mode</li>
                            <li><img src={setting} alt="" style={{ marginBottom: -3 }} /> Settings</li>
                            <li><img src={audit} alt="" style={{ marginBottom: -3 }} />  Audit Log</li>
                        </ul>
                    </div>
                </div>
    )
}