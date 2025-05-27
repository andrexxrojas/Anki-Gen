import styles from "./PageLayout.module.css";

export default function PageLayout({ children }) {
    return (
        <main className={styles['page-layout']}>
            {children}
        </main>
    )
}