import React from "react";
import styles from "./detail.module.css";
import { useParams } from "react-router-dom";
import product from "../../data/product.json";
import { Typography } from "antd";

const Detail = () => {
  const { id } = useParams();
  const detailProduct = product.filter((item) => {
    return parseInt(item.id) === parseInt(id);
  })[0];

  const { Title } = Typography;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title>{detailProduct.title}</Title>
      </div>
      <div className={styles.detail}>
        <Title level={5}>Price: {detailProduct.price}</Title>
        <hr />
        <Title level={5}>Rating: {detailProduct.rating}</Title>
        <hr />
        <Title level={5}>Stock: {detailProduct.stock}</Title>
        <hr />
        <Title level={5}>Brand: {detailProduct.brand}</Title>
        <hr />
        <Title level={5}>Description: {detailProduct.description}</Title>
        <hr />

        <img src={detailProduct.thumbnail} alt="" />
      </div>
    </div>
  );
};

export default Detail;
