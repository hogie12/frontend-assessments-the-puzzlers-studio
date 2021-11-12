/** @jsxImportSource theme-ui */
import React from "react";
import { Box } from "@theme-ui/components";
import img from "../images/jpg/header-img-gardener.jpg";

export default function Card2() {
  return (
    <Box
      sx={{
        width: "146px",
        height: "195px",
        boxShadow: "0px 24px 42px rgba(0, 0, 0, 0.2)",
        borderRadius: "12px",
        padding: "8px",
        background:"#FFF8EF"
      }}
    >
      <img
        src={img}
        alt="gardener"
        sx={{
          maxWidth: "130px",
          maxHeight: "130px",
        }}
      />
      <div sx={{ color: "#004E4C" }}>
        <h3
          sx={{
            marginTop: "8px",
            marginBottom: "0px",
            fontSize: "15px",
          }}
        >
          GreenThumb
        </h3>
        <p
          sx={{
            marginTop: "0px",
            fontSize: "13px",
          }}
        >
          Gardener in CheChe
        </p>
      </div>
    </Box>
  );
}
