/** @format */

import styles from "./Contact.module.css";
import EmailIcon from "@material-ui/icons/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Contact() {
  return (
    <div
      style={{ backgroundColor: "black", width: "100%", top: "100px" }}
      id="contact"
    >
      <div className={styles.contact}>
        <div className={styles.contactDetails}>
          <p>CONTACT ME</p>

          <div>
            <LocationOnIcon style={{ color: "white" }}></LocationOnIcon>
            <p>Karnataka, India</p>
          </div>
          <div>
            <EmailIcon style={{ color: "white" }}></EmailIcon>
            <p>veekshithgandhi@gmail.com</p>
          </div>
          <div>
            <LinkedInIcon style={{ color: "white" }}></LinkedInIcon>
            <p>linkedin.com/in/veekshithgandhi</p>
          </div>
          <div>
            <GitHubIcon style={{ color: "white" }}></GitHubIcon>
            <p>github.com/veekshith-gandhi</p>
          </div>
        </div>
        <form
          className={styles.formContainer}
          action="https://formsubmit.co/veekshithgandhi@gmail.com"
          method="post"
          enctype="text/plain"
        >
          <input type="hidden" name="_subject" value="new email whoo!" />
          <label>Name</label>
          <input type="text" name="name" required></input>

          <label>Email</label>
          <input type="email" name="email" required></input>
          <label>Message</label>
          <textarea
            name="message"
            placeholder="Write something.."
            required
          ></textarea>
          <button type="submit" value="SEND">
            SEND <LocalPostOfficeOutlinedIcon></LocalPostOfficeOutlinedIcon>
          </button>
        </form>
      </div>
    </div>
  );
}
