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
import "../App.css";
import { AiOutlinePaperClip } from "@react-icons/all-files/ai/AiOutlinePaperClip";
import { AiOutlineCloseCircle } from "@react-icons/all-files/ai/AiOutlineCloseCircle";
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
      preview: props.preview,
      id: props.id,
      displayPreview: false,
    };
    this.state = initialState;
    this.escFunction = this.escFunction.bind(this);
  }

  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));
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
      console.log("Here");
      if (popupIsOpen) {
        this.setState({ displayPreview: false });
      }
    }
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
            bgcolor: "#E0E0E0",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 1,
            fontWeight: "bold",
          }}
        >
          {displayPreview ? (
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
                <Document
                  style={{ display: "block", margin: "auto" }}
                  file={preview}
                >
                  <Page pageNumber={1} />
                </Document>
              </div>
            </div>
          ) : (
            <div></div>
          )}

          <Box sx={{ p: 2, display: "flex", width: "20rem", bgcolor: "#F5F5F5" }}>
            <Stack spacing={0.5}>
              <Typography fontWeight={700}>{templateName}</Typography>
              <div style={{ display: "flex" }}>
                <div style={{ width: "95%" }}>
                  <Typography variant="body2" color="text.secondary">
                    {description}
                  </Typography>
                </div>
                <div onClick={() => this.displayPreview()} style={{ width: "5%" }}>
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

export default TemplateOption;
