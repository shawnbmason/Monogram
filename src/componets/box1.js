import "../styles/box1.css";
import { Link } from "react-router-dom";

export default function Box1() {
  return (
    <div className="section">
      <div className="mini">
        <h1
          className="boxOneHeader"
          style={{ fontSize: "35px", fontWeight: "bolder", color: "#1a2456" }}
        >
          MINI CONSOLE{" "}
          <span style={{ fontSize: "30px", backgroundColor: "red" }}>
            PRE-ORDER
          </span>
        </h1>
      </div>

      <h1
        className="boxOnePicture"
        style={{ fontSize: "35px", fontWeight: "bolder", color: "#1a2456" }}
      >
        Box 1 Picture
      </h1>

      <Link to="/">
        <button
          style={{
            marginTop: "10px",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          Home
        </button>
      </Link>
    </div>
  );
}
