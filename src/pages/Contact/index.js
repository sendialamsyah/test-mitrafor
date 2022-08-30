import React from "react";
import styles from "./contact.module.css";
import profilePic from "../../assets/images/1655077629700.jpg";
import { GithubOutlined, LinkedinOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const Contact = () => {
  const { Title } = Typography;
  return (
    <div className={styles.container}>
      <Title>Contact</Title>
      <h1>Sendi Alamsyah</h1>
      <img src={profilePic} alt="profile" />
      <div className={styles.icons}>
        <a href="https://github.com/sendialamsyah">
          <GithubOutlined />
        </a>
        <a href="https://www.linkedin.com/in/sendialamsyah/">
          <LinkedinOutlined />
        </a>
      </div>
    </div>
  );
};

export default Contact;
