import React from "react";
import { Jumbotron, Row, Col, Container } from "react-bootstrap";
import Layout from "../../components/Layout";
import "./style.css";
import { NavLink } from "react-router-dom";

const Home = (props) => {
  return (
    <Layout sidebar>
      {/* <Jumbotron
        style={{ margin: "5rem", background: "#ffffff" }}
        className="text-center"
      >
        <h1>Welcome to Admin Dashboard</h1>
        <p>Admins page involves certain special functionalities</p>
      </Jumbotron> */}
    </Layout>
  );
};

export default Home;
