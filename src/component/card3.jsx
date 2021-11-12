/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "@theme-ui/components";
import img from '../images/jpg/header-img-barista.jpg'

export default function Card3() {
  return (
    <Box pl={2}
      sx={{
        width: "146px",
        height: "165px",
        boxShadow: "0px 40px 40px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        padding:'8px',
        background:"#FFF8EF"
      }}
    >
      <img src={img} alt="barista" sx={{
        maxWidth:'130px',
        maxHeight:'100px'
      }}/>
      <div sx={{ color: "#004E4C" }}>
        <h3
          sx={{
            marginTop:"8px",
            marginBottom: "0px",
            fontSize:"15px"
          }}
        >
          potject
        </h3>
        <p
          sx={{
            marginTop: "0px",
            fontSize:"13px"
          }}
        >
          Pottery in Bangkok
        </p>
      </div>
    </Box>
  );
}
