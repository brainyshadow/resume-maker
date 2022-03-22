import { Component } from "react";
import "./Templates.css";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import TemplateOption from "./TemplateOption";

import TemplateOne from "../assets/templates/TemplateOne.pdf";
import TemplateTwo from "../assets/templates/TemplateTwo.pdf";
import TemplateThree from "../assets/templates/TemplateThree.pdf";

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
              downloads={10}
            />
            <TemplateOption
              name="Simple Resume 2"
              description="A template that has a personal section on the left and a large section for all your qualifications on the right."
              id="00000002"
              onClick={() => this.templateSelect("00000002")}
              preview={TemplateTwo}
              downloads={10}
            />
            <TemplateOption
              name="Name Focused Resume"
              description="A template that focuses attention to your name and has all the qualifications below, neatly orginized."
              id="00000003"
              onClick={() => this.templateSelect("00000003")}
              preview={TemplateThree}
              downloads={10}
            />
          </div>
        </Paper>
      </>
    );
  }
}

export default Templates;
