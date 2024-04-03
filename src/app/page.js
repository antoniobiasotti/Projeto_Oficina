import Image from "next/image";
import styles from "./page.module.css";
import { Card } from "@/components/Card/Card";

export default function Home() {
  return (
    <>
      <h1>Olá Mundo</h1>
      <Card
        imagePath={
          "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg"
        }
        country={"Afghanistan"}
        population={"40218234"}
        region={"Asia"}
        capital={"Kabul"}
      />
    </>
  );
}
