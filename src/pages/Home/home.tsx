import styles from './home.module.css'
import logo from '../../assets/logo.svg'
import notifications from '../../assets/notifications.svg'
import profile from '../../assets/profile.svg'
import plus from "../../assets/plus.svg"
import square from "../../assets/box.svg"
import acc from "../../assets/acc.svg"
import minfo from "../../assets/minfo.svg"
import manage from '../../assets/manage.svg'
import polaris from '../../assets/polaris.svg'
import dodoi from '../../assets/dodoi.svg'
import dot from '../../assets/dot.svg'
import copy from '../../assets/copy.svg'
import { Button,Nav } from '../../Components'

export const Home: React.FC = () => {


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
                <Nav/>
                <div className={styles.balance}>
                    <div className={styles.dash}>
                        <h2 style={{ fontSize: 20 }}>Virtual Account Dashboard</h2>
                        <div className={styles.btn}>
                            <Button style={{}} >

                                <img src={square} alt="" />

                                <p>Create new Branch</p>

                            </Button>
                            <Button style={{ border: 'none', backgroundColor: ' #5444F2', color: '#fff' }} >

                                <img src={plus} alt="" />

                                <p style={{ fontSize: 14 }}>Create Virtual Account</p>

                            </Button>

                        </div>
                    </div>
                    <div className={styles.myinfo}>
                        <div className={styles.acc}>
                            <img src={acc} alt="" style={{ width: '100%' }} />

                            <div className={styles.minfo}>
                                <img src={minfo} alt="" style={{ width: '100%' }} />
                                <div className={styles.title}>
                                    <h4>Lekki ii</h4>

                                    <img src={manage} alt="" style={{ width: '14%' }} />
                                </div>
                                <div className={styles.td}>
                                    <p style={{marginLeft:-77}}>Bank Name</p>
                                    <p style={{marginLeft:10}}>Virtual Account</p>
                                    <p>Total inflow</p>
                                </div>
                                {/* turn to components */}
                                <div className={styles.info}>
                                    <img src={polaris} alt="" style={{ width: '5%' }} />

                                    <h4 style={{ fontSize: '.8rem' }}>Polaris Bank Limited</h4>

                                    <p style={{ fontSize: '.8rem' ,marginLeft:36,}}>1234567890</p>
                                    <img src={copy} alt="" style={{ width: '3%',marginLeft:6, }} />
                                    <img src={dodoi} alt="" style={{ width: '15%' }} />
                                    <p style={{ fontSize: '.8rem' }}>NGN 100,000.00</p>
                                    <img src={dot} alt="" style={{ width: '2%',marginLeft:9 }} />
                                </div>
                                <div className={styles.info}>
                                    <img src={polaris} alt="" style={{ width: '5%' }} />

                                    <h4 style={{ fontSize: '.8rem' }}>Polaris Bank Limited</h4>

                                    <p style={{ fontSize: '.8rem' ,marginLeft:36,}}>1234567890</p>
                                    <img src={copy} alt="" style={{ width: '3%',marginLeft:6, }} />
                                    <img src={dodoi} alt="" style={{ width: '15%' }} />
                                    <p style={{ fontSize: '.8rem' }}>NGN 100,000.00</p>
                                    <img src={dot} alt="" style={{ width: '2%',marginLeft:9 }} />
                                </div>
                                <div className={styles.info}>
                                    <img src={polaris} alt="" style={{ width: '5%' }} />

                                    <h4 style={{ fontSize: '.8rem' }}>Polaris Bank Limited</h4>

                                    <p style={{ fontSize: '.8rem' ,marginLeft:36,}}>1234567890</p>
                                    <img src={copy} alt="" style={{ width: '3%',marginLeft:6, }} />
                                    <img src={dodoi} alt="" style={{ width: '15%' }} />
                                    <p style={{ fontSize: '.8rem' }}>NGN 100,000.00</p>
                                    <img src={dot} alt="" style={{ width: '2%',marginLeft:9 }} />
                                </div>
                                <div className={styles.info}>
                                    <img src={polaris} alt="" style={{ width: '5%' }} />

                                    <h4 style={{ fontSize: '.8rem' }}>Polaris Bank Limited</h4>

                                    <p style={{ fontSize: '.8rem' ,marginLeft:36,}}>1234567890</p>
                                    <img src={copy} alt="" style={{ width: '3%',marginLeft:6, }} />
                                    <img src={dodoi} alt="" style={{ width: '15%' }} />
                                    <p style={{ fontSize: '.8rem' }}>NGN 100,000.00</p>
                                    <img src={dot} alt="" style={{ width: '2%',marginLeft:9 }} />
                                </div>
                                <div className={styles.info}>
                                    <img src={polaris} alt="" style={{ width: '5%' }} />

                                    <h4 style={{ fontSize: '.8rem' }}>Polaris Bank Limited</h4>

                                    <p style={{ fontSize: '.8rem' ,marginLeft:36,}}>1234567890</p>
                                    <img src={copy} alt="" style={{ width: '3%',marginLeft:6, }} />
                                    <img src={dodoi} alt="" style={{ width: '15%' }} />
                                    <p style={{ fontSize: '.8rem' }}>NGN 100,000.00</p>
                                    <img src={dot} alt="" style={{ width: '2%',marginLeft:9 }} />
                                </div>
                            </div>
                        </div>
                        <div>dd</div>
                    </div>
                </div>

            </div>
        </div>
    )
}