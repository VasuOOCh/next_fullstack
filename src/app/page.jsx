import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative thoughts agency</h1>
        <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id vero ducimus alias quam incidunt, aspernatur recusandae eaque nemo totam tenetur.</p>
        <div className={styles.buttons}>
          <button className={styles.button}>
            Learn more
          </button>
          <button className={styles.button}>
            Contact
          </button>
        </div>
        <div className={styles.brand}>
          <Image src={'/brands.png'} alt="" fill sizes="100%" />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={'/hero.gif'} sizes="100%" fill alt="image" />
      </div>
    </div>
  );
}
