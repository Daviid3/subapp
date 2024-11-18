import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Container, Box, Typography, Button } from "@mui/material";
import Navbar1 from "./Navbarsub";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const API_BASE_URL = "https://zafrino-5e5b8bdb623d.herokuapp.com/api";
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("Access")}`,
  },
});

function Subscriptions() {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchSubscription();
  }, []);

  const fetchSubscription = async () => {
    try {
      const response = await api.get("/Subscriptions");

      setSubscriptions(response.data.data);
      console.log("Data fetched successfully:", response.data.data);
    } catch (error) {
      setError("Failed to fetch subscription data");
      console.error("Error fetching subscription data:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteSubscription = async (id) => {
    try {
      await api.delete(`/Subscriptions/${id}`);
      const newsubscription = subscriptions.filter(
        (subscription) => subscription.id !== id
      );
      setSubscriptions(newsubscription);
    } catch (error) {}
  };

  const handlenavigate = (subscription) => {
    const subscription1 = subscription.id;
    navigate(`/EditSubscriptions/${subscription.id}`, {
      state: { subscription1 },
    });
    console.log(subscription1);
  };

  return (
    <Container>
      <Navbar1 />
      <Box style={{ marginTop: "100px", marginLeft: "200px" }}>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 178,
              height: 60,
              borderRadius: 5,
              paddingTop: 2,
              backgroundColor: "lightgreen",
            },
          }}
        >
          <Paper elevation={0}>Active Subscriptions</Paper>
          <Paper>Monthly Spending</Paper>
          <Paper elevation={3}>Next Payment</Paper>
        </Box>

        <Typography
          sx={{ textAlign: "start", marginLeft: "10px", color: "black" }}
        >
          Active subscriptions
        </Typography>
        <Box sx={{ width: "700px" }}>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">
              {typeof error === "string" ? error : "An error occurred"}
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Period</TableCell>
                    <TableCell align="right">Next Billing</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Payment</TableCell>
                    <TableCell align="right" sx={{ textAlign: "center" }}>
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subscriptions.length > 0 ? (
                    subscriptions
                      .filter(
                        (subscription) =>
                          subscription.attributes.status === "Active"
                      )
                      .map((subscription, index) => (
                        <TableRow
                          key={subscription.id || index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            height={0.5}
                            textTransform="none"
                          >
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            {subscription.attributes.service || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.amount || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.period || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.start_date || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.status === "Active"
                              ? "Active"
                              : "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.last_four_digits || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            <Box sx={{ display: "flex" }}>
                              <Button
                                onClick={() => handlenavigate(subscription)}
                                sx={{ paddingRight: "-15px" }}
                              >
                                <Typography
                                  sx={{ textTransform: "none", color: "black" }}
                                >
                                  Edit
                                </Typography>
                              </Button>
                              <Button
                                onClick={() =>
                                  deleteSubscription(subscription.id)
                                }
                                variant="contained"
                                sx={{
                                  backgroundColor: "#FFEBEB",
                                  color: "#DB2424",
                                }}
                              >
                                <Typography sx={{ textTransform: "none" }}>
                                  Delete
                                </Typography>
                              </Button>
                            </Box>
                          </TableCell>
                        </TableRow>
                      ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} align="center">
                        No subscriptions found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>

        <Typography
          sx={{ textAlign: "start", marginLeft: "10px", color: "black" }}
        >
          Inactive subscriptions
        </Typography>
        <Box sx={{ width: "700px" }}>
          {loading ? (
            <Typography>Loading...</Typography>
          ) : error ? (
            <Typography color="error">
              {typeof error === "string" ? error : "An error occurred"}
            </Typography>
          ) : (
            <TableContainer component={Paper}>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell>Service</TableCell>
                    <TableCell align="right">Amount</TableCell>
                    <TableCell align="right">Period</TableCell>
                    <TableCell align="right">Next Billing</TableCell>
                    <TableCell align="right">Status</TableCell>
                    <TableCell align="right">Payment</TableCell>
                    <TableCell align="right">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {subscriptions.length > 0 ? (
                    subscriptions
                      .filter(
                        (subscription) =>
                          subscription.attributes.status === "Inactive"
                      )
                      .map((subscription, index) => (
                        <TableRow
                          key={subscription.id || index}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row" height={0.5}>
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            {subscription.attributes.service || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.amount || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.period || "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            {subscription.attributes.start_date || "N/A"}
                          </TableCell>
                          <TableCell align="right">Inactive</TableCell>
                          <TableCell align="right">
                            {subscription.attributes.last_four_digits|| "N/A"}
                          </TableCell>
                          <TableCell align="right">
                            <Button
                              variant="contained"
                              sx={{
                                borderRadius: "15px",
                                backgroundColor: "green",
                                color: "black",
                              }}
                            >
                              <Typography sx={{ textTransform: "none" }}>
                                Reactivate
                              </Typography>
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} align="center">
                        No subscriptions found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            "& > :not(style)": {
              m: 1,
              width: 700,
              height: 60,
              borderRadius: 5,
              paddingTop: 2,
              backgroundColor: "lightgreen",
              justifyContent: "space-between",
            },
          }}
        >
          <Paper elevation={0}>
            <Box
              sx={{
                display: "flex",
                fontSize: "0.875rem",
                justifyContent: "space-between",
              }}
            >
              <Typography sx={{ width: "193px" }}>
                Total Active Subscriptions 3
              </Typography>
              <Typography sx={{ width: "175px" }}>
                Monthly Spending $84.00
              </Typography>
              <Typography sx={{ width: "175px" }}>
                Annual Spending $1,008.00
              </Typography>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ width: "700px", display: "flex", justifyContent: "end" }}>
          <Button sx={{ backgroundColor: "blue" }} variant="contained">
            {" "}
            <Link to={"/AddSubscriptions"}>+ Add Subscription</Link>{" "}
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
export default Subscriptions;
