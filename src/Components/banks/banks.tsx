import React from 'react'
import styles from './styles.module.css'
import polaris from '../../assets/polaris.svg'
import dodoi from '../../assets/dodoi.svg'
import dot from '../../assets/dot.svg'
import copy from '../../assets/copy.svg'

interface BankInfoProps {
    bankName: string;
    bankLocation: string;
    active?: boolean;
    bankLogo?: string;
    onClick?: React.MouseEventHandler
}

export const BankInfo:React.FC<BankInfoProps> = ({ onClick, bankName, active, bankLocation, bankLogo }) =>{
    
    return(
    <div 
        onClick={onClick} 
        className={`${styles.info} ${active ? styles.active : null}`}
    >
        {active && <span className={styles.indicator}/>}
        <div>
            <img 
                src={bankLogo} 
                alt={bankName} 
                style={{ width: '5%' }} 
            />

            <h4 style={{ fontSize: '.8rem' }}>
                {bankName}
            </h4>

            <p style={{ fontSize: '.8rem', marginLeft: 36, }}>
                1234567890
            </p>
            <img src={copy} alt="" style={{ width: '3%', marginLeft: 6, }} />
            <img src={dodoi} alt="" style={{ width: '15%' }} />
            <p style={{ fontSize: '.8rem' }}>NGN 100,000.00</p>
            <img src={dot} alt="" style={{ width: '2%', marginLeft: 9 }} />
        </div>
    </div>
    )
}