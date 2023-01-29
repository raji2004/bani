import styles from './home.module.css'
import logo from '../../assets/logo.svg'
import notifications from '../../assets/notifications.svg'
import profile from '../../assets/profile.svg'


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
                <div className={styles.Navbar}>
                    <ul className={styles.ul}>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    <h4 className={styles.head}>Buissness</h4>
                    <ul className={styles.ul}>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    <h4 className={styles.head}>Payment</h4>
                    <ul className={styles.ul}>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    
                    <div className={styles.last}>
                    <ul className={styles.ul}>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}