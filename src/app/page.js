import Image from "next/image";
import styles from "./page.module.css";
import { Header } from "./src/components/Header/Header.jsx";

export default function Home() {
  return (
    <div>
      <h1>Olá Mundo</h1>
      <Header></Header>
    </div>
  );
}
