import styles from '../styles/Layout.module.css'
import Header from './Header'
import Nav from './Nav'

const Layout = ({children}) => {
    return (
        <>
        <Nav />
        <div className={styles.container}>

            <main className={styles.main}>
                <h2>Layout page global</h2>
                <Header/>
                {children}
            </main>

        </div>
        </>
    )
}

export default Layout
