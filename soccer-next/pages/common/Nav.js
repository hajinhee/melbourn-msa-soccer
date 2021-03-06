import Link from "next/link";
import styles from "common/style/Nav.module.css";
import { Route } from "react-router-dom";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/admin/dashboard'>Dash Board</Link> </li>
        <li className={styles.li}> <Link href='/basic/calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='/basic/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/bmi'>BMI</Link> </li>
        <li className={styles.li}> <Link href='/board/board-list'>BoradList</Link> </li>
        <li className={styles.li}> <Link href='/board/board-form'>BoradForm</Link> </li>
        <li className={styles.li}> <Link href='/game/game-list'>Game List</Link> </li>
        <li className={styles.li}> <Link href='/game/team-list'>Team List</Link> </li>
        <li className={styles.li}> <Link href='/todo/todo-list'>Todo List</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-in'>Signin</Link> </li>
        <li className={styles.li}> <Link href='/user/sign-up'>Signup</Link> </li>
      </ul>
    </nav>
  );                                                                                                      
}




