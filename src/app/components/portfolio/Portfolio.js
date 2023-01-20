import styles from "./Portfolio.module.scss";
import Presentation from "./components/presentation/Presentation";
import Divider from "../../../components/divider/Divider";
import About from "./components/about/About";

export default function Portfolio() {
  return (
    <div className={`${styles.portfolio} `}>
      <Presentation />
      <About />
      <Divider />
    </div>
  );
}
