import { Card, Image, Button, Input } from "antd";
import { Divider } from "antd";
import { Typography } from "antd";


import exgcoin from "../assets/exgcoin.png";
import no11 from "../assets/no11.png";
import no22 from "../assets/no22.png";
import no3 from "../assets/no3.png";
import exghands from "../assets/exghands.png";
import Header from "./Header";

import React from "react";

const { Text } = Typography;

const TradeToEarn = () => {

  return (
    <>
    <Header />
      <div className="scan-container trade-to-earn flex-direction-column ">
        <br />
        <br />
        <br />
        {
          <>
            <p
              style={{
                color: "#5F5F5F",
                marginTop: 50,
                textAlign: "center",
                fontWeight: 400,
                fontSize: "50px",
                lineHeight: "1em",
                margin: -19,
              }}
            >
              Trade To Earn{" "}
            </p>
            <p
              style={{
                color: "#5F5F5F",
                marginTop: -20,
                marginLeft: 316,
                fontWeight: 400,
                textAlign: "center",
                fontSize: "30px",
              }}
            >
              &trade;
            </p>
            <br></br>
            <div class="grid  place-items-center">
              <Card
                style={{
                  display: "flex",
                  width: 405,
                  textAlign: "center",
                  alignItems: "center",
                }}
              >
                <h2
                  className="centered"
                  style={{
                    marginBottom: 0,
                    color: "#5F5F5F",
                    fontSize: "30px",
                  }}
                >
                  Withdraw Earnings
                </h2>
                <Divider />
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                ></div>
                <h2
                  className="centered"
                  style={{
                    marginBottom: 10,
                    color: "#5F5F5F",
                    fontSize: "25px",
                  }}
                >
                  indexx Exchange (INEX)
                </h2>
                <Image src={exgcoin} width={120} preview={false}></Image>
                <h1
                  style={{
                    display: "flex",
                    marginTop: 0,
                    justifyContent: "center",
                    alignItems: "center",
                    opacity: "20%",
                    color: "#5F5F5F",
                    fontSize: "90px",
                  }}
                >
                  $0
                </h1>
                <br />
                <Text
                  className="centered"
                  style={{
                    marginBottom: 0,
                    color: "#5F5F5F",
                    fontSize: "15px",
                  }}
                >
                  Minimum limit:100$ <br />
                </Text>
                <Text
                  className="centered"
                  style={{
                    marginBottom: 0,
                    color: "#5F5F5F",
                    fontSize: "20px",
                  }}
                >
                  1 USD = 0.1 INEX
                  <br />
                </Text>
                <Text
                  className="centered"
                  style={{
                    marginBottom: 0,
                    color: "#5F5F5F",
                    fontSize: "20px",
                  }}
                >
                  Earning Percentage = 5%
                </Text>
                <br /> <br></br>
                <Button
                  type="primary"
                  block
                  shape="round"
                  size="large"
                  className="btn_xl"
                  style={{
                    height: "55px",
                    borderRadius: "5px",
                  }}
                >
                  Withdraw Tokens
                </Button>
                <br />
                <br />
                <Input.Group compact style={{ paddingTop: "40px" }}>
                  <Input
                    size={"middle"}
                    style={{ width: "100%", marginBottom: "10px" }}
                    defaultValue="Enter Wallet Address"
                  />
                  <Button
                    type="primary"
                    block
                    shape="round"
                    size="large"
                    className="btn_xl"
                    style={{
                      height: "55px",
                      borderRadius: "5px",
                    }}
                  >
                    Submit Wallet Address
                  </Button>
                </Input.Group>
                <br />
              </Card>
            </div>
          </>
        }
        <div class="grid  place-items-center place-content-center">
          <Image
            preview={false}
            src={exghands}
            style={{
              paddingTop: 100,
              display: "flex",
              justifyContent: "center",
              width: 400,
              alignItems: "center",
            }}
          ></Image>
          <br />
          <Image
            preview={false}
            src={no11}
            style={{
              display: "flex",
              justifyContent: "center",
              width: 500,
              alignItems: "center",
            }}
          ></Image>{" "}
          <br />
          <Image
            preview={false}
            src={no22}
            style={{
              display: "flex",
              justifyContent: "center",
              width: 500,
              alignItems: "center",
            }}
          ></Image>{" "}
          <br />
          <Image
            class="grid  place-items-center"
            preview={false}
            src={no3}
            style={{
              paddingLeft: 10,
              display: "flex",
              justifyContent: "center",
              width: 480,
              alignItems: "center",
            }}
          ></Image>{" "}
        </div>

        <br />
      </div>
      {/* add your footer here */}
    </>
  );
};

export default TradeToEarn;
