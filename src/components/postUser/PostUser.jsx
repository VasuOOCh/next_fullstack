import styles from "./postuser.module.css";
import Image from "next/image";

const PostUser = async () => {

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={'/about.png'}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>Vasu CHoudhari</span>
      </div>
    </div>
  );
};

export default PostUser;