import Link from "next/link";
import Header from "../header/header";
import styles from "./main.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      <section>
        <Link href="/">
          <a>Home</a>
        </Link>
      </section>
      {children}
    </div>
  );
}
