import "./Contact.css";
import dices from "../../dices.png";
import contactUs from "../../contactUs.png";
import { Icon } from "@mui/material";
import MessageIcon from "@mui/icons-material/Message";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

export function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact-page">
      <div className="contact-header">
        <img className="dices-image" src={dices} alt="HomePage" onClick={() => navigate("/")} />
      </div>
      <div className="content-container">
        <h1>CONTACT US</h1>
        <p className="content-text">
          LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU!
          WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN
          REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE,
          EMAIL, OR SOCIAL MEDIA.
        </p>
        <div className="contact-form-main-div">
          <div className="contact-form">
            <div className="form-header">
              <div className="two-btns">
                <button className="chat-btn">
                  <Icon className="chat-btn-icon">
                    <MessageIcon />
                  </Icon>
                  VIA SUPPORT CHAT
                </button>
                <button className="call-btn">
                  <Icon className="call-btn-icon">
                    <LocalPhoneIcon />
                  </Icon>
                  VIA CALL
                </button>
              </div>
              <div className="one-btn">
                <button className="email-btn">
                  <Icon className="email-btn-icon">
                    <MessageIcon />
                  </Icon>
                  VIA EMAIL FORM
                </button>
              </div>
            </div>
            <div className="form-fields">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="E-mail"
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Text"
                variant="outlined"
              />
            </div>
            <div className="form-button">
              <button className="submit-btn">SUBMIT</button>
            </div>
          </div>
          <div className="contact-image">
            <img
              className="contact-main-image"
              src={contactUs}
              alt={contactUs}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
