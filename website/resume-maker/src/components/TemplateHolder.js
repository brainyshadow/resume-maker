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
import { AiOutlinePaperClip } from "@react-icons/all-files/ai/AiOutlinePaperClip";

class ProjectCard extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      templateName: props.name,
      description: props.description,
      preview: props.preview,
      id: props.id,
      displayPreview: false,
    };
    this.state = initialState;
  }
  displayPreview() {
    this.setState({ displayPreview: true });
  }
  render() {
    const {
      templateName,
      complexity,
      description,
      preview,
      id,
      displayPreview,
    } = this.state;
    let color = "#6495ED";
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
          {displayPreview ? (
            <div className="template-preview">
              <img src={preview}></img>
            </div>
          ) : (
            <div></div>
          )}
          <Box sx={{ p: 2, display: "flex", width: "20rem" }}>
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{templateName}</Typography>
              <div style={{ display: "flex" }}>
                <div style={{ width: "95%" }}>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </div>
                <div onClick={() => this.displayPreview()}>
                  <AiOutlinePaperClip style={{ width: "200%" }} />
                </div>
              </div>
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
              <Chip
                sx={{ backgroundColor: color }}
                label={"Select Template"}
                onClick={this.props.onClick}
              />
            </Typography>
          </Stack>
        </Card>
      </div>
    );
  }
}

export default ProjectCard;
