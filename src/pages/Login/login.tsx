import styles from './login.module.css';
import Logo from '../../assets/logo.svg';
import { Button, Input } from '../../Components';
import { useNavigate } from 'react-router-dom';

export const Login: React.FC = () => {
  const navigate = useNavigate()
  
  const submitForm = (e:any) => {
    e.preventDefault();
    navigate('/Home')
  }
    
  return(
    <main className={styles.Mainpage}>
      <img src={Logo} alt="Logo" />
      <form onSubmit={submitForm} className={styles.Login}>
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

        <button type='submit' className={styles.submit}>
          Log in
        </button>
      </form>
    </main>
  )
}