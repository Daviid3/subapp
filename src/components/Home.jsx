import React from "react";
import Navbar from "./NavBar";
import {
  Box,
  Button,
  Paper,
  Typography,
  Toolbar,
  Container,
} from "@mui/material";
import { AccountCircleRounded } from "@mui/icons-material";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import NotificationsNoneSharpIcon from "@mui/icons-material/NotificationsNoneSharp";
import MonetizationOnRoundedIcon from "@mui/icons-material/MonetizationOnRounded";
import { Link } from "react-router-dom";

function FeatureCard({ title, icon, description }) {
  return (
    <Paper
      sx={{
        textAlign: "start",
        width: "300px",
        height: "200px",
        paddingLeft: "30px",
        paddingTop: "30px",
        gap: "10px",
      }}
    >
      <Box>{icon}</Box>
      <Typography variant="h6" sx={{ fontWeight: "bold", marginBottom: "8px" }}>
        {title}
      </Typography>
      <Typography sx={{ color: "#4C994D", fontSize: "1.15rem" }}>
        {description}
      </Typography>
    </Paper>
  );
}
function FeatureCard1({ title, icon, description, Position }) {
  return (
    <Paper
      sx={{
        textAlign: "start",
        width: "300px",
        height: "200px",
        paddingLeft: "30px",
        paddingTop: "30px",
        gap: "10px",
      }}
    >
      <Typography>{description}</Typography>
      <Box sx={{ display: "flex", marginTop: "10px" }}>
        <Box>{icon}</Box>{" "}
        <Box sx={{ marginLeft: "5px" }}>
          <Typography sx={{ fontWeight: "bold" }}>{title}</Typography>
          <Typography sx={{ marginBottom: "8px", color: "#4C994D" }}>
            {Position}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}

function Home() {
  return (
    <Container style={{ maxWidth: "none" }}>
      <Navbar />
      <Toolbar
        sx={{
          marginTop: "70px",
          display: "flex",
          height: "450px",
          backgroundColor: "#E8F3E8",
        }}
      >
        <Box sx={{ width: "50%", marginLeft: "0px", textAlign: "initial" }}>
          <Typography
            sx={{
              color: "#071507",
              fontSize: "3.6rem",
              lineHeight: "1",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            Take Control of Your Digital Subscriptions
          </Typography>
          <Typography
            sx={{ color: "#4C994D", fontSize: "1.7rem", marginBottom: "20px" }}
          >
            Track, manage, and optimize all your subscriptions in one place.
            Save money and never miss a payment again.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#13E611",
              color: "black",
              marginRight: "10px",
              fontWeight: "bold",
            }}
          >
            <Link to={"/Signup"}>
              <Typography color="black">Get Started Free</Typography>
            </Link>
          </Button>
          <Button
            variant="contained"
            sx={{
              color: "#071507",
              backgroundColor: "#F8FCF9",
              fontWeight: "bold",
            }}
          >
            Learn More
          </Button>
          <Typography sx={{ color: "#4C994D", marginTop: "20px" }}>
            No credit card required • Free 14-day trial
          </Typography>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Paper
            sx={{
              height: "300px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ alignItems: "center" }}>
              <Paper
                sx={{
                  height: "280px",
                  width: "10",
                  backgroundColor: "#E8F3E8",
                }}
              >
                <Typography
                  sx={{
                    paddingTop: "30px",
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Box>Active Subscriptions</Box>
                  <Box sx={{ color: "#4C994D", marginLeft: "300px" }}>
                    $84.00/month
                  </Box>
                </Typography>{" "}
                <Paper
                  sx={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginTop: "15px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    textAlign: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "200px",
                      paddingTop: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#13E611",
                        width: "30px",
                        paddingTop: "10px",
                        marginBottom: "10px",
                        marginRight: "20px",
                      }}
                    >
                      <Paper
                        sx={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          marginTop: "20px",
                        }}
                      ></Paper>
                    </Box>
                    <Box>
                      <Typography>Netflix</Typography>
                      <Typography sx={{ color: "#4C994D" }}>Monthly</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ color: "#4C994D" }}>$12.00</Box>
                </Paper>
                <Paper
                  sx={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginTop: "15px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    textAlign: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "200px",
                      paddingTop: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#13E611",
                        width: "30px",
                        paddingTop: "10px",
                        marginBottom: "10px",
                        marginRight: "20px",
                      }}
                    >
                      <Paper
                        sx={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          marginTop: "20px",
                        }}
                      ></Paper>
                    </Box>
                    <Box>
                      <Typography>Spotify</Typography>
                      <Typography sx={{ color: "#4C994D" }}>Monthly</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ color: "#4C994D" }}>$9.99</Box>
                </Paper>
                <Paper
                  sx={{
                    marginLeft: "20px",
                    marginRight: "20px",
                    marginTop: "15px",
                    height: "50px",
                    display: "flex",
                    justifyContent: "space-between",
                    paddingLeft: "20px",
                    paddingRight: "20px",
                    textAlign: "start",
                  }}
                >
                  <Box
                    sx={{
                      width: "200px",
                      paddingTop: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        backgroundColor: "#13E611",
                        width: "30px",
                        paddingTop: "10px",
                        marginBottom: "10px",
                        marginRight: "20px",
                      }}
                    >
                      <Paper
                        sx={{
                          paddingLeft: "20px",
                          paddingRight: "20px",
                          marginTop: "20px",
                        }}
                      ></Paper>
                    </Box>
                    <Box>
                      <Typography>Amazon Prime</Typography>
                      <Typography sx={{ color: "#4C994D" }}>Annual</Typography>
                    </Box>
                  </Box>
                  <Box sx={{ color: "#4C994D" }}>$139.99</Box>
                </Paper>
              </Paper>
            </Box>
          </Paper>
        </Box>
      </Toolbar>

      <Toolbar
        sx={{
          marginTop: "0px",
          backgroundColor: "#F8FCF9",
          paddingTop: "20px",
          flexDirection: "column",
          height: "450px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#071507", marginBottom: "20px", fontWeight: "bold" }}
        >
          Why Choose Our Platform?
        </Typography>
        <Typography sx={{ color: "#4C994D", marginBottom: "40px" }}>
          Everything you need to manage subscriptions effectively
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <FeatureCard
            icon={
              <SignalCellularAltIcon
                sx={{
                  color: "#4C994D",
                  fontSize: "40px",
                  variant: "contained",
                }}
              />
            }
            title="Analytics Dashboard"
            description="Get detailed insights into your spending patterns and subscription usage."
          />
          <FeatureCard
            icon={
              <NotificationsNoneSharpIcon
                sx={{ color: "#4C994D", fontSize: "40px" }}
              />
            }
            title="Smart Reminders"
            description="Never miss a payment with automated notifications and renewal reminders."
          />
          <FeatureCard
            icon={
              <MonetizationOnRoundedIcon
                sx={{ color: "#4C994D", fontSize: "40px" }}
              />
            }
            title="Cost Optimization"
            description="Get recommendations to reduce costs and identify unused subscriptions."
          />
        </Box>
      </Toolbar>

      <Toolbar
        sx={{
          marginTop: "0px",
          backgroundColor: "#E8F3E8",
          paddingTop: "20px",
          flexDirection: "column",
          height: "450px",
        }}
      >
        <Typography
          variant="h4"
          sx={{ color: "#071507", marginBottom: "20px", fontWeight: "bold" }}
        >
          Trusted by Thousands
        </Typography>
        <Typography sx={{ color: "#4C994D", marginBottom: "40px" }}>
          Join over 50,000 users who have taken control of their subscriptions
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
          <FeatureCard1
            icon={
              <AccountCircleRounded
                sx={{ color: "#4C994D", fontSize: "40px" }}
              />
            }
            description="This app has saved me hundreds of dollars by identifying subscriptions I forgot about. The interface is intuitive and the reminders are super helpful."
            title="Sarah Johnson"
            Position="Small Business Owner"
          />
          <FeatureCard1
            icon={
              <AccountCircleRounded
                sx={{ color: "#4C994D", fontSize: "40px" }}
              />
            }
            description="The analytics dashboard is amazing! I can see exactly where my money is going and make informed decisions about my subscriptions."
            title="Michael Rodriguez"
            Position="Freelance Designer"
          />
          <FeatureCard1
            description="Perfect for keeping track of all my family's subscriptions. The cost optimization features have helped us budget better."
            icon={
              <AccountCircleRounded
                sx={{ color: "#4C994D", fontSize: "40px" }}
              />
            }
            title="Emily Parker"
            Position="Family Manager"
          />
        </Box>
      </Toolbar>
    </Container>
  );
}

export default Home;
