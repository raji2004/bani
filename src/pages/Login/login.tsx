import styles from './login.module.css';
import Logo from '../../assets/logo.svg'
export const Login: React.FC = () => {
    
    
    return(
        <div className={styles.Mainpage}>
           <img src={Logo} alt="" style={{marginBottom:"4rem"}} />
              <div className={styles.Login}>
                <h2 className={styles.header}>Log in to your Account</h2>
                <h4 className={styles.semitext}>Dont have an account? <span className={styles.blue}>Get started</span></h4>
              </div>
        </div>
    )
}