import styles from '../Nav/style.module.css'
import {Button} from '../button/button'
import plus from "../../assets/plus.svg"
import square from "../../assets/box.svg"

export const Dashboard: React.FC=()=>{
    return(
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
    )
}