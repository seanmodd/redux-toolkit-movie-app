import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>Movie App</div>
      <div>©2021, Movie, Inc. or its affiliates</div>
    </div>
  );
};

export default Footer;
