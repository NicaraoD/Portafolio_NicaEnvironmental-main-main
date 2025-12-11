import NavComponent from './NavOnly'
import styles from '../styles/PageLayout.module.css'

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <>
            <NavComponent />
            <main className={styles.pageContainer}>
                {children}
            </main>
        </>
    )
}
