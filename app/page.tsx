"use client";
import { Button, Row } from "antd";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function HomePage() {
  const buttonStyle = {
    background: "#60463b",
    color: "#feefc3",
    height: "3rem",
    padding: "0 3rem",
    border: "none",
  };

  const router = useRouter();
  const user = "ram";

  useEffect(() => {
    if (user !== null) {
      return router.push("/dashboard");
    } else {
      return router.push("/");
    }
  }, [user]);

  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <Button style={buttonStyle}>Sign In with Google</Button>
    </Row>
  );
}

export default HomePage;
