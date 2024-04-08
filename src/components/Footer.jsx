import "./../style/Footer.css";

export default function Footer() {
  return (
    <div id="footerContainer">
      <div className="infoContainer">
        <p>Need help? Contact us</p>
        <p className="socialMediaLinks">Gmail</p>
      </div>
      <div className="infoContainer">
        <p>Want to stay informed? Follow us on social media</p>
        <div id="socialMediaContainer">
          <p className="socialMediaLinks">Instagram</p>
          <p className="socialMediaLinks">Facebook</p>
        </div>
      </div>
    </div>
  );
}
