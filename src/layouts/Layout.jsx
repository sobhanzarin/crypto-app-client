import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App </h1>
        <p></p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Sobhan Zarin❤️</p>
      </footer>
    </>
  );
}
export default Layout;
