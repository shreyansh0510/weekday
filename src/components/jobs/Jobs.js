import {
  Alert,
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import "../../App.css";

const style = {
  jobsTypography: {
    fontWeight: 600,
  },
  chip: {
    borderRadius: 5,
    height: 30,
    fontSize: 12,
    maxWidth: "auto",
  },
};

function Jobs({ totalCount }) {
  const jobsData = useSelector((state) => state.filters.filteredData);

  return (
    <>
      <Grid container spacing={5}>
        {jobsData?.map((item, index) => (
          <>
            <Grid item xs={16} md={4} key={item.jdUid}>
              <Card
                sx={{
                  p: 2,
                  fontSize: 16,
                }}
                className="card"
              >
                <Stack>
                  <Stack>
                    <Typography container sx={{ mb: 2 }}>
                      <Chip
                        label={`⌛ posted ${Math.floor(
                          Math.random() * 10
                        )} days ago`}
                        variant="outlined"
                        // className="chip"
                        sx={style.chip}
                      />
                    </Typography>
                    <Grid
                      container
                      sx={{ display: "flex", alignItems: "center", mb: 2 }}
                    >
                      <Grid item xs={3}>
                        <CardMedia
                          component="img"
                          image={item.logoUrl}
                          alt={item.companyName}
                          height={70}
                          width={30}
                          sx={{ objectFit: "contain", ml: -1 }}
                        />
                      </Grid>
                      <Grid item xs={9} sx={{ pl: 0 }}>
                        <Grid item xs={16} sx={{ fontWeight: 600 }}>
                          {item.companyName}
                        </Grid>
                        <Grid item xs={16} sx={{ textTransform: "capitalize" }}>
                          {item.jobRole.charAt(0).toUpperCase() +
                            item.jobRole.slice(1)}
                        </Grid>
                        <Grid item xs={16}>
                          <span>
                            {item.location.charAt(0).toUpperCase() +
                              item.location.slice(1)}
                          </span>
                          {item.minExp !== null || item.minExp === 0 ? (
                            <span>
                              &nbsp;|&nbsp;Exp: {item.minExp} - {item.maxExp}
                              year
                            </span>
                          ) : (
                            ""
                          )}
                        </Grid>
                      </Grid>
                    </Grid>
                    <Typography sx={{ mb: 2 }}>
                      Estimated Salary: ₹{item.minJdSalary} - {item.maxJdSalary}{" "}
                      LPA ✅
                    </Typography>
                    <Typography sx={style.jobsTypography}>
                      About Company:
                    </Typography>
                    {/* <Typography sx={style.jobsTypography}>About us</Typography> */}
                    <Typography sx={{ mb: 2 }}>
                      {item.jobDetailsFromCompany}
                    </Typography>
                    <Stack sx={{ mb: 2 }}>
                      <Typography sx={{ fontWeight: 600 }}>
                        Founder/Recruiter profile:
                      </Typography>
                      <Link href="#" underline="none">
                        {"Suchit Dubey"}
                      </Link>
                    </Stack>
                    <Stack sx={{ mb: 2 }}>
                      <Typography sx={style.jobsTypography}>
                        About Role
                      </Typography>
                      <Typography sx={style.jobsTypography}>
                        Overview
                      </Typography>
                      Narrative (YC w23)
                    </Stack>
                  </Stack>
                  {/* ------------------- */}
                  <Stack sx={{}}>
                    <Stack sx={{ mb: 2 }}>
                      <Typography sx={style.jobsTypography}>
                        Minimum Experience
                      </Typography>
                      <Typography sx={{}}>
                        {item.minExp ? item.minExp : "0"} Years
                      </Typography>
                    </Stack>
                    <Button
                      sx={{
                        width: "100%",
                        fontWeight: "bold",
                        borderRadius: 5,
                        backgroundColor: "var(--theme-color)",
                        color: "var(--primary-color)",
                        pt: 2,
                        pb: 1,
                      }}
                      variant="contained"
                    >
                      <Typography
                        sx={{
                          // fontWeight: 600,
                          pr: 3,
                          fontSize: 18,
                          color: "var(--primary-color)",
                        }}
                        gutterBottom
                      >
                        🚀 &nbsp; Easy Apply
                      </Typography>
                    </Button>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </>
        ))}
      </Grid>
      {jobsData.length === Number(totalCount) ? (
        <Alert
          severity="warning"
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 6,
            fontWeight: 500,
            fontSize: 20,
            alignItems: "center",
          }}
        >
          No data found
        </Alert>
      ) : (
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            mt: 6,
            mb: 4,
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </>
  );
}

export default Jobs;
