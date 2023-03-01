import "./footer.css";
const Footer = (props) => {
  const { isOpenPost, setOpenPost } = props;
  return (
    <footer className="footer-title" onClick={() => setOpenPost(!isOpenPost)}>
      {isOpenPost ? "x" : "+"}
    </footer>
  );
};

export default Footer;
