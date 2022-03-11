import { Component } from "react";
import TemplateOne from "../assets/TemplateOne.pdf";
import "../App.css";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import TemplateOption from "./TemplateOption";

class Templates extends Component {
  templateSelect(id) {
    this.props.templateSelect(id);
  }

  render() {
    return (
      <>
        <Paper
          sx={{
            alignItems: "center",
            bgcolor: "background.paper",
            overflow: "hidden",
            borderRadius: "12px",
            boxShadow: 3,
            fontWeight: "bold",
            margin: "1rem",
          }}
        >
          <div className="content-container-center">
            <Typography
              variant="h4"
              color="text.primary"
              gutterBottom={true}
              sx={{ margin: "1rem" }}
            >
              Templates
            </Typography>
          </div>
          <Divider
            sx={{
              width: "90%",
              display: "flex",
              margin: "auto",
            }}
          ></Divider>

          <div className="project-container" id="main-area">
            <TemplateOption
              name="Simple Resume 1"
              description="A template that has a personal section on the right and a large section for all your qualifications on the left."
              id="00000001"
              onClick={() => this.templateSelect("00000001")}
              preview={TemplateOne}
            />
          </div>
        </Paper>
      </>
    );
  }
}

export default Templates;
