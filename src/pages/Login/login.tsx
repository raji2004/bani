import styles from './login.module.css';
import Logo from '../../assets/logo.svg';
import { Button, Input } from '../../Components';

export const Login: React.FC = () => {
    
  return(
    <main className={styles.Mainpage}>
      <img src={Logo} alt="" style={{marginBottom:"4rem"}} />
      <form className={styles.Login}>
        <h2 className={styles.header}>Log in to your Account</h2>
        <p className={styles.semitext}>Dont have an account? <span className={styles.blue}>Get started</span></p>
      
        <Input
          type="email"
          placeholder="eg. victor.onazi@getbani.co"
          labelName='Email'
        />

        <Input
          type="password"
          helperText='Forgot Password?'
          placeholder="Password"
          labelName='Password'
        />

        <button className={styles.submit}>
          Log in
        </button>
      </form>
    </main>
  )
}