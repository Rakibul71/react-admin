import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import { userData } from "../../dummyData";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo></FeaturedInfo>
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      ></Chart>
    </div>
  );
};

export default Home;
