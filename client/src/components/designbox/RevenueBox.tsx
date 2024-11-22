import React from "react";

type RevenueBoxProps = {
    value: number;
    month: string;
    isCurrent: boolean;
};

export default function RevenueBox({ value, month, isCurrent }: RevenueBoxProps) {
    const maxBarHeight = 200;
    const maxValue = 100;
    const height = (value / maxValue) * maxBarHeight;

    return (
        <div style={{ 
            width: "60px", 
            height: `${height}px`, 
            backgroundColor: isCurrent ? "#007bff" : "#e0e0e0",
            borderRadius: "12px", 
            position: "relative", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            flexDirection: "column",
        }} className="revenue-bar">
            <span style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: isCurrent ? "#007bff" : "#888",
                position: "absolute",
                top: "-25px", 
            }}>
                ${value}
            </span>
            <span style={{
                fontSize: "11px",
                color: isCurrent ? "#007bff" : "#888",
                position: "absolute",
                bottom: "-25px", 
            }}>
                {isCurrent ? "Current" : month}
            </span>
        </div>
    );
}
