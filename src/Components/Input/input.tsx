import styles from "./input.module.css";

export interface InputProps {
    labelName: string;
    id?: string;
    onChange?: React.ChangeEventHandler;
    placeholder: string;
    type: 'email'|'password'|'text';
    helperText?: string;
}

export const Input: React.FC<InputProps> = ({ labelName, ...rest }) => {
    const { id, helperText } = rest;
    return(
        <div className={styles.inputContainer}>
            <div>
                <label htmlFor={id}>{labelName}</label>
                <span className={styles.helperText}>
                    {helperText}
                </span>
            </div>
            <input {...rest}/>
        </div>
    )
}