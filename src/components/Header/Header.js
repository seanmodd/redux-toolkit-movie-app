import Image from "next/image";
import React from "react";
import Link from "next/link";
import user from "../../../public/user.png";
import styles from "./Header.module.css";

function Header() {
  return (
    <div className={styles.header}>
      <Link href="/">
        <div className={styles.logo}>Movie App</div>
      </Link>
      <div className={styles.userImage}>
        <Image
          src={user}
          alt="Picture of the author"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
}

export default Header;
