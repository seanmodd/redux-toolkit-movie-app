import React from "react";
import styles from "src/styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";

function Layout(props) {
  
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {props.children}
        <footer className={styles.footer}>
          <div target="_blank" rel="noopener noreferrer">
            Powered by
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
