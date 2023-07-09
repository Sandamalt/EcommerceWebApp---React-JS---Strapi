import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";
// require("dotenv").config();

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  // console.log(data);

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          It is a device mainly used for a voice call. Presently technological
          advancements have made our life easy. Today, with the help of a mobile
          phone we can easily talk or video chat with anyone across the globe by
          just moving our fingers.
        </p>
      </div>
      <div className="bottom">
        {error
          ? "Something went wrong"
          : loading
          ? "loading"
          : data?.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
