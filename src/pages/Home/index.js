import { Typography, Space, Table } from "antd";
import React, { useState } from "react";
import styles from "./home.module.css";
import product from "../../data/product.json";
import { Button, Input, Image } from "antd";
import { Link } from "react-router-dom";

const Home = () => {
  const { Title } = Typography;
  const { Search } = Input;

  const [products, setProduct] = useState(product);
  const columns = [
    {
      title: "No",
      dataIndex: "index",
      key: "index",
      render: (text, record, index) => index + 1,
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Brand",
      dataIndex: "brand",
      key: "brand",
    },
    {
      title: "Photo",
      key: "images",
      render: (_, record) => <Image width={200} src={record.thumbnail} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Link to={`/detail/${record.id}`}>
          <Button type="primary" shape="round">
            Detail
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <Title className={styles.title}>Home</Title>
      <div className={styles.formSearch}>
        <Space direction="vertical">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
            // onSearch={onSearch}
          />
        </Space>
      </div>
      <div className={styles.table}>
        <Table columns={columns} dataSource={products} />
      </div>
    </div>
  );
};

export default Home;
