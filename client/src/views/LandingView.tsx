import CircButton from "../components/common/CircButton";
import { useNavigate } from "react-router-dom";

export default function LandingView(): JSX.Element {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <CircButton text={"Log in"} onClick={() => navigate("/posts")} size={5} />
    </div>
  );
}
