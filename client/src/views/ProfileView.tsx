import React from "react";
import NavigationBar from "../components/wireframe/NavigationBar";
import johnDoe from "./../assets/icons/johnDoe.png";
import cybertruck from "./../assets/icons/cybertruck.png";
import picture1 from "./../assets/icons/picture1.png";
import picture2 from "./../assets/icons/picture2.png";

export default function ProfileView(): JSX.Element {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "16px auto",
        backgroundColor: "#ffffff",
        borderRadius: "10px",
        padding: "16px",
        fontFamily: "'Arial', sans-serif",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "10px" }}>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundImage: `url(${cybertruck})`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            borderRadius: "10px",
          }}
        ></div>
        <div
          style={{
            position: "absolute",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            borderRadius: "50%",
            border: "4px solid white",
            overflow: "hidden",
            width: "110px",
            height: "110px",
            backgroundColor: "#fff",
          }}
        >
          <img
            src={johnDoe}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>

      <div style={{ marginTop: "12px", textAlign: "center", padding: "0 16px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: "700", margin: "8px 0" }}>
          Techno King <span style={{ color: "#007BFF" }}>✔</span>
        </h2>
        <p style={{ fontSize: "14px", color: "#777" }}>Texas, Austin</p>
        <div style={{ margin: "16px 0" }}>
          <button
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
              marginRight: "8px",
            }}
          >
            Add Friend
          </button>
          <button
            style={{
              backgroundColor: "white",
              color: "#007BFF",
              border: "1px solid #007BFF",
              padding: "10px 20px",
              borderRadius: "5px",
              fontWeight: "bold",
            }}
          >
            Message
          </button>
        </div>
        <p>
          User Feedback:{" "}
          <span style={{ fontSize: "18px", color: "#FFD700" }}>😊</span>
        </p>
      </div>

      {/* Metrics */}
      <div
        style={{
          margin: "16px 0",
          padding: "16px",
          borderTop: "1px solid #eee",
          borderBottom: "1px solid #eee",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "8px 0", fontSize: "14px" }}>
          ❤️ Intention of Repurchase 97%<br />
          <span style={{ fontSize: "12px", color: "#777" }}>
            130 out of 139 satisfied
          </span>
        </p>
        <p style={{ margin: "8px 0", fontSize: "14px" }}>
          💬 Response Rate: <span style={{ color: "#777" }}>Not enough data</span>
        </p>
      </div>

      {/* Deal Reviews */}
      <div style={{ margin: "16px 0", padding: "0 16px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
          Deal Reviews
        </h3>
        <p style={{ fontSize: "14px", margin: "4px 0" }}>👥 31 Kind Responses</p>
        <p style={{ fontSize: "14px", margin: "4px 0" }}>👥 14 Same Price</p>
        <p style={{ fontSize: "14px", margin: "4px 0" }}>👥 11 Time Keeper</p>
      </div>

      {/* Recent Transactions */}
      <div style={{ margin: "16px 0", padding: "0 16px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
          Recent Sell:
        </h3>
        <div style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
          <img
            src={picture1}
            alt="SpaceX Chopsticks"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              marginRight: "12px",
              borderRadius: "5px",
            }}
          />
          <div>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>
              SpaceX Chopsticks (Rocket Not Included)
            </p>
            <p style={{ margin: "0", fontSize: "12px", color: "#777" }}>
              Displayed Price: $910,000,000<br />
              Strike Price: $880,000,000
            </p>
            <p style={{ margin: "0", fontSize: "12px", color: "#777" }}>12 days ago</p>
          </div>
        </div>

        <h3 style={{ fontSize: "16px", fontWeight: "600", marginBottom: "8px" }}>
          Recent Buy:
        </h3>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={picture2}
            alt="Twitter"
            style={{
              width: "50px",
              height: "50px",
              objectFit: "cover",
              marginRight: "12px",
              borderRadius: "5px",
            }}
          />
          <div>
            <p style={{ margin: "0", fontSize: "14px", fontWeight: "bold" }}>Twitter</p>
            <p style={{ margin: "0", fontSize: "12px", color: "#777" }}>
              Displayed Price: $56 Million<br />
              Strike Price: $56 Million
            </p>
            <p style={{ margin: "0", fontSize: "12px", color: "#777" }}>6 months ago</p>
          </div>
        </div>
      </div>
      <NavigationBar />
    </div>
  );
}

