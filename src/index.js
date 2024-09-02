import React from 'react'
import styles from './styles.css'

const OCModalMalek = ({ isOpen, onClose, text }) => {
    return (
        <div className={`${styles.modal} ${isOpen ? styles['modal--active'] : ''}`}>
            <div className={styles['modal__content']}>
                <div className={styles['modal__title']}>✅ Success !</div>
                <div className={styles['modal__body']}>
                    {text}
                </div>
                <button type="submit" className={styles.button} onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default OCModalMalek;