import styles from './Header.module.css'
import foguete from '../assets/foguete.png'
export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <img src={foguete} alt="foguete" />
                <p>to<span>do</span></p>
            </div>
        </header>
    )
}