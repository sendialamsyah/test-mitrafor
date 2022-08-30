import React from "react";
import styles from "./about.module.css";
import profilePic from "../../assets/images/1655077629700.jpg";
import { Typography } from "antd";

const About = () => {
  const { Title } = Typography;
  return (
    <div className={styles.container}>
      <Title>About</Title>
      <img src={profilePic} alt="profile" />
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos modi
        nihil qui harum molestiae nobis veritatis magnam iste, temporibus
        deleniti, vero distinctio! Omnis accusamus facere debitis eius dolor
        maxime autem.
      </p>
    </div>
  );
};

export default About;
