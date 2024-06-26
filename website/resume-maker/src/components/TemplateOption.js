import "../App.css";
import {
  Card,
  Box,
  Avatar,
  Stack,
  Typography,
  Divider,
  Chip,
} from "@mui/material";
import "./TemplateOption.css";
import { AiOutlinePaperClip } from "@react-icons/all-files/ai/AiOutlinePaperClip";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
import { AiOutlineCloudDownload } from "@react-icons/all-files/ai/AiOutlineCloudDownload";
import React, { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class TemplateOption extends Component {
  constructor(props) {
    super(props);
    const initialState = {
      videoLink: props.videoLink,
      githubLink: props.projectLink,
      templateName: props.name,
      description: props.description,
      previewUrl: props.previewUrl,
      id: props.id,
      downloads: props.downloads,
      displayPreview: false,
    };
    this.state = initialState;
    this.escFunction = this.escFunction.bind(this);
  }

  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  displayPreview() {
    const displayPreview = this.state.displayPreview;
    this.setState({ displayPreview: !displayPreview });
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  escFunction(event) {
    const popupIsOpen = this.state.displayPreview;
    if (event.key === "Escape") {
      if (popupIsOpen) {
        this.setState({ displayPreview: false });
      }
    }
  }

  render() {
    const {
      templateName,

      description,
      previewUrl,

      displayPreview,
      downloads,
    } = this.state;
    let color = "#6495ED";
    console.log(previewUrl);
    return (
      <div className="card-container">
        <Card
          sx={{
            alignItems: "center",
            bgcolor: "#E0E0E0",
            overflow: "hidden",
            borderRadius: "5px",
            boxShadow: 1,
            fontWeight: "bold",
            width: "15rem",
          }}
        >
          {displayPreview ? (
            <div className="template-preview-background">
              <div className="template-preview">
                <AiOutlineCloseCircle
                  onClick={() => this.displayPreview()}
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                  }}
                />
                <div className="vertical-center">
                  <img src={previewUrl} className="template" width={700}></img>
                </div>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <Box
            sx={{
              p: 2,
              display: "flex",
              bgcolor: "#F5F5F5",
            }}
          >
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{templateName}</Typography>
              <div style={{ display: "flex" }}>
                <div style={{ width: "95%" }}>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </div>
                <div
                  onClick={() => {
                    this.displayPreview();
                    this.handleVerifyRecaptcha();
                  }}
                  style={{ width: "5%" }}
                >
                  <AiOutlinePaperClip style={{ width: "200%" }} />
                </div>
              </div>
            </Stack>
          </Box>
          <Divider sx={{ width: "90%", margin: "auto" }} />
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ px: 2, py: 1 }}
          >
            <Typography color="white" fontWeight={300} align="left">
              <Chip
                sx={{ backgroundColor: color }}
                label={
                  <>
                    <AiOutlineCloudDownload /> {downloads}
                  </>
                }
              />
            </Typography>
            <Typography color="white" fontWeight={300} align="right">
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

export default TemplateOption;
