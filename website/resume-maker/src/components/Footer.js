import "../App.css";
import "./Footer.css";
import { Typography } from "@mui/material";

const date = new Date().getFullYear();
const Footer = () => {
  return (
    <>
      <div className="footer">
        <Typography
          variant="body1"
          color="white"
          sx={{
            margin: "auto",
            verticalAlign: "bottom",
          }}
        >
          Resume Maker
        </Typography>
      </div>
    </>
  );
};

export default Footer;
