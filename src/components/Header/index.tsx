import igniteLogo from "../../assets/Ignite-logo.svg";
import styles from "./styles.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="ignite logo" title="ignite logo" />
    </header>
  );
}
