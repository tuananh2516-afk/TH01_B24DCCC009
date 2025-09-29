import { useState, useEffect } from "react";

function TrafficLight() {
  const [light, setLight] = useState("");

  const changeLight = () => {
    const colors = ["red", "yellow", "green"];
    let newColor = light;
    while (newColor === light) {
      newColor = colors[Math.floor(Math.random() * colors.length)];
    }
    setLight(newColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prev) => {
        const colors = ["red", "yellow", "green"];
        let newColor = prev;
        while (newColor === prev) {
          newColor = colors[Math.floor(Math.random() * colors.length)];
        }
        return newColor;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []); 

  return (
    <div style={{ padding: 20 }}>
      <div style={{ display: "flex", flexDirection: "column", width: 60 }}>
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "5px auto",
            background: light === "red" ? "red" : "#555",
          }}
        />
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "5px auto",
            background: light === "yellow" ? "yellow" : "#555",
          }}
        />
        <div
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            margin: "5px auto",
            background: light === "green" ? "green" : "#555",
          }}
        />
      </div>

      <button onClick={changeLight} style={{ marginTop: 10 }}>
        Chuyển đèn
      
      </button>
    </div>
  );
}

export default TrafficLight;
