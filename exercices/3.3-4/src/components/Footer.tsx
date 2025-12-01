import "./Footer.css";

interface FooterProps {
  urlLogo: string;
  children: React.ReactNode;
  theme: string;
}

const Footer = ({ urlLogo, children, theme = "light" }: FooterProps) => {
  return (
    <footer className={theme === "light" ? "footer-light" : "footer-dark"}>
      <div>{children}</div>
      <img src={urlLogo} alt="logo" className="logo" />
    </footer>
  );
};

export default Footer;
