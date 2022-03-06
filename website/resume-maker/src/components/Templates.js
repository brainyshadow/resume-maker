import { Component } from "react";
import TemplateHolder from "../components/TemplateHolder";
import TemplateOne from "../assets/TemplateOne.jpg";
import TemplateTwo from "../assets/TemplateTwo.jpg";
import "../App.css";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";

class Templates extends Component {
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
            <TemplateHolder
              complexity=""
              name="Simple Resume 1"
              description="A template that has a personal section on the right and a large section for all your qualifications on the left."
            />
            <TemplateHolder
              complexity=""
              name="Simple Resume 2"
              description="A template that has a personal section on the left and a large section for all your qualifications on the right."
            />
            <TemplateHolder
              complexity=""
              name="Simple Resume 3"
              description="A template that has a personal section on the left and a large section for all your qualifications on the right."
            />
          </div>
        </Paper>
      </>
    );
  }
}

export default Templates;
