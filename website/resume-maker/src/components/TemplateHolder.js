import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import { Component } from "react";
import "../App.css";

import { createTheme } from "@mui/material/styles";
import { makeStyles } from "@mui/styles";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      templateName: props.name,
      description: props.description,
      src: props.src,
    };
    this.state = initialState;
  }
  render() {
    const { templateName, complexity, description, src } = this.state;
    let color = "#6495ED";
    const displayedComplext = "Complexity: " + complexity;
    return (
      <div className="card-container">
        <Card
          sx={{
            alignItems: "center",
            bgcolor: "#F5F5F5",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
          }}
        >
          <Box sx={{ p: 2, display: "flex", width: "20rem" }}>
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{templateName}</Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Stack>
          </Box>

          <Divider />

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1, bgcolor: "#A9A9A9" }}
          >
            <div></div>

            <Typography color="white" fontWeight={300}>
              <Chip sx={{ backgroundColor: color }} label={"Select Template"} />
            </Typography>
          </Stack>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
