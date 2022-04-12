import { Component, useEffect } from "react";
import "./Templates.css";
import { Paper } from "@mui/material";
import { Typography } from "@mui/material";
import { Divider } from "@mui/material";
import TemplateOption from "./TemplateOption";
import TemplateOne from "../assets/templates/TemplateOne.pdf";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import GetTemplates from "../client/GetTemplates";
import { useState } from "react";
import React from "react";

function Templates(props) {
  function templateSelect(id) {
    props.templateSelect(id);
  }
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [templateOptions, setTemplateOptions] = useState([]);

  async function getToken() {
    if (!executeRecaptcha) {
      return;
    }
    const result = await executeRecaptcha("getTemplate");
    return result;
  }

  useEffect(async () => {
    let token = await getToken();
    let templates = await GetTemplates(token);
    let templateOptions = [];
    templates.forEach((template) => {
      templateOptions.push(
        <TemplateOption
          name={template.TempalteName}
          description={template.TemplateDescription}
          id={template.TemplateID}
          onClick={() => templateSelect(template.TemplateID.toString())}
          preview={TemplateOne}
          downloads={template.DownloadCount}
        />
      );
    });
    setTemplateOptions(templateOptions);
  }, []);

  console.log(templateOptions);
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
          {React.Children.toArray(templateOptions)}
        </div>
      </Paper>
    </>
  );
}

export default Templates;
