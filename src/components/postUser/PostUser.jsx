import { getUser } from "../../lib/data";
import styles from "./postuser.module.css";
import Image from "next/image";

async function getData(userId) {
  const res = await fetch('http://localhost:3000/api/users/' + userId);
 
  // console.log(res);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
 
    return res.json()
}
 

const PostUser = async ({userId}) => {

  const user = await getData(userId);
  // console.log(user);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user.img}
        alt=""
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;