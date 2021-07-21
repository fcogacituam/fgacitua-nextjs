import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from "next/router";
export default function Header() {
  const router = useRouter();
  console.log(`router`, router);
  return (
    <div className={styles.header}>
      <Link href="/posts">
        <a
          className={
            (styles.anchor, router.pathname === "/posts" ? styles.active : "")
          }
        >
          Blog
        </a>
      </Link>
      <Link href="/contact">
        <a
          className={
            (styles.anchor, router.pathname === "/contact" ? styles.active : "")
          }
        >
          Contact
        </a>
      </Link>
    </div>
  );
}
