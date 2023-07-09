import React, { useEffect, useState } from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
import axios from "axios";
// require("dotenv").config();

const FeaturedProducts = ({ type }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          import.meta.env.VITE_API_URL + "/products?populate=*",
          {
            headers: {
              Authorization: "bearer " + import.meta.env.VITE_API_TOKEN,
            },
          }
        );
        setData(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

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
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;

//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           process.env.REACT_APP_API_URL + "/products",
//           {
//             headers: {
//               Authorization: "Bearer " + process.env.REACT_APP_API_TOKEN,
//             },
//           }
//         );
//         const products = response.data;
//         setProducts(products);
//         console.log(products);
//       } catch (err) {
//         console.log(err);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="featuredProducts">
//       <div className="top">
//         <h1>{type} products</h1>
//         <p>
//           It is a device mainly used for a voice call. Presently technological
//           advancements have made our life easy. Today, with the help of a mobile
//           phone we can easily talk or video chat with anyone across the globe by
//           just moving our fingers.
//         </p>
//       </div>
//       <div className="bottom">
//         {products.map((item) => (
//           <Card item={item} key={item.id} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FeaturedProducts;
