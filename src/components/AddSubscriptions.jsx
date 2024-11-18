import {
  Container,
  styled,
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar2 from "./AddSubNavbar";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useNavigate } from "react-router";
import { useLocation, useParams, Link } from "react-router-dom";

const StyledPaper = styled(Paper)(({ theme }) => ({
  margin: theme.spacing(1),
  padding: theme.spacing(3),
}));

const initialstate = {
  Service: "",
  Amount: "",
  StartDate: "",
  Status: "",
  Last_four_digits: "",
  Period: "",
};

function AddSubscriptions() {
  const [Post, setPost] = useState(initialstate);
  const [period, setPeriod] = useState("monthly");
  console.log(Post);
  const userEmail = sessionStorage.getItem("userEmail");
  const location = useLocation();
  const { state } = location;
  const { id } = useParams();
  const [subscription, setSubscription] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    console.log("user Email:", userEmail);
  }, [userEmail]);
  const [isEditMode, setIsEditMode] = useState(false);

  //  useEffect(() => {
  //     if (state && state.subscriptions) {
  //       const subscription = state.subscriptions;
  //       isEditMode(true)

  //       setIsEditMode(true);
  //     }
  //   }, [state]);

  const fetchSubscription = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        ` https://zafrino-5e5b8bdb623d.herokuapp.com/api/subscriptions/${id}`
      );

      setSubscription(response.data.data.attributes);
      console.log("Data fetched successfully:", response.data.data);
    } catch (error) {
      setError("Failed to fetch subscription data");
      console.error("Error fetching subscription data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  const handleinput = (event) => {
    setPost({ ...Post, [event.target.name]: event.target.value });
  };
  console.log(subscription, "sub");
  const handlesubmit = async (event) => {
    try {
      event.preventDefault();
      alert("Submitted");

      const useData = {
        data: {
          service: Post.Service,
          period: Post.Period,
          amount: Post.Amount,
          status: Post.Status,
          last_four_digits: Post.Last_four_digits,
          userEmail: userEmail,
          start_date: Post.StartDate,

     
        },
      };

      console.log("Sending user data:", useData);

      const response = await axios.post(
        "https://zafrino-5e5b8bdb623d.herokuapp.com/api/subscriptions",
        useData
      );

      console.log("Registration successful", response.data);
      alert("Registration successful!");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        console.error("Error during registration:", error.response.data.error);
        alert(
          `Error: ${
            error.response.data.error.message ||
            "Registration failed due to validation."
          }`
        );
      } else {
        console.error("Error during registration:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
    setPost({ ...Post, Period: event.target.value });
  };

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 700,
      },
    },
  };

  const names = ["Active", "Inactive"];

  function getStyles(name, personName, theme) {
    return {
      fontWeight: personName.includes(name)
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  const theme = useTheme();
  const [personName, setPersonName] = useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    const selectedStatus = typeof value === "string" ? value.split(",") : value;

    setPersonName(selectedStatus);
    setPost({ ...Post, Status: selectedStatus.join(", ") });
  };
  console.log(subscription, "subscription");
  return (
    !loading && (
      <Container maxWidth="md">
        <Navbar2 />
        <StyledPaper
          sx={{ marginTop: "100px", backgroundColor: "white" }}
          elevation={4}
        >
          <form onSubmit={handlesubmit}>
            <Box sx={{ textAlign: "start" }}>
              <Typography variant="h6" gutterBottom sx={{ fontSize: "1rem" }}>
                Service
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <TextField
                  onChange={handleinput}
                  name="Service"
                  fullWidth
                  placeholder="Enter service name"
                  value={subscription.service}
                />
              </Box>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1rem" }}>
                Amount
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <TextField
                  onChange={handleinput}
                  name="Amount"
                  fullWidth
                  placeholder="$ 0.00"
                  value={subscription.amount}
                />
              </Box>
              <Typography variant="h4" gutterBottom sx={{ fontSize: "1rem" }}>
                Start Date
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <TextField
                  onChange={handleinput}
                  name="StartDate"
                  fullWidth
                  placeholder="mm/dd/yyyy"
                  value={subscription.start_date}
                />
              </Box>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                Status
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3, width: "100%" }}>
                <FormControl sx={{ m: 0, width: 850, mt: 3 }}>
                  <Select
                   
                    displayEmpty
                    value={subscription.status}
                    onChange={handleChange}
                    input={<OutlinedInput />}
                    // renderValue={(selected) => {
                    //   if (selected.length === 0) {
                    //     return <>Status</>;
                    //   }

                    //   return selected.join(", ");
                    // }}
                    MenuProps={MenuProps}
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem disabled value="">
                      <>Status</>
                    </MenuItem>
                    {names.map((name) => (
                      <MenuItem
                        key={name}
                        value={name}
                        style={getStyles(name, personName, theme)}
                      >
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>{" "}
              </Box>
              <Typography variant="h4" sx={{ fontSize: "1rem" }}>
                Last 4 Digits
              </Typography>
              <Box sx={{ display: "flex", gap: 1, mb: 3 }}>
                <TextField
                  onChange={handleinput}
                  name="Last_four_digits"
                  fullWidth
                  placeholder="Enter last 4 digits"
                  value={subscription.last_four_digits}
                />
              </Box>

              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  Period
                </FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  onChange={handlePeriodChange}
                  name="Period"
                  defaultValue={subscription.period}
                >
                  <FormControlLabel
                    value="monthly"
                    control={<Radio />}
                    label="Monthly"
                  />
                  <FormControlLabel
                    value="yearly"
                    control={<Radio />}
                    label="Yearly"
                  />
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
              {" "}
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#13E611",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Add Subscription
              </Button>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  <Link to={"/Subscriptions"}>Cancle</Link>
                </Button>
              </Box>
            </Box>
          </form>
        </StyledPaper>
      </Container>
    )
  );
}

export default AddSubscriptions;
