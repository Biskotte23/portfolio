import styles from "./App.module.scss";
import Header from "./components/header/Header";
import Portfolio from "./components/portfolio/Portfolio";

export default function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Portfolio />
    </div>
  );
}
