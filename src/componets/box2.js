import "../styles/box1.css";
import { Link } from "react-router-dom";

export default function Box2() {
  return (
    <div
      style={{
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>Box 2</h1>

      <Link to="/">
        <button style={{ marginTop: "10px", cursor: "pointer" }}>Home</button>
      </Link>
    </div>
  );
}
