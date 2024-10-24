// components/Layout.js
import styles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Timbu Cloud Shop</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Timbu Cloud Shop</p>
      </footer>
    </div>
  );
};

export default Layout;
