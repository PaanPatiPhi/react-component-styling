// Start coding here
import errorIcon from "../assets/icon/frown.png";
import warningIcon from "../assets/icon/alert-triangle.png";
import infoIcon from "../assets/icon/alert-circle.png";
import successIcon from "../assets/icon/check-circle.png";

function Alert({ type, children }) {
  const baseStyle = {
    width: "650px",
    height: "76px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "0 16px",
    borderRadius: "6px",
    fontSize: "20px",
    fontWeight: "Bold",
    color: "#444444",
    margin: "10px",
  };

  const alertStyles = {
    error: {
      backgroundColor: "#F9C8C8",

   
    },
    warning: {
      backgroundColor: "#FCE0CF",

    },
    info: {
      backgroundColor: "#F8EDC6",

    },
    success: {
      backgroundColor: "#D7FCD7",

    },
  };

  const style = {
    ...baseStyle,
    ...alertStyles[type],
  };

  const alertIcons = {
    error: errorIcon,
    warning: warningIcon,
    info: infoIcon,
    success: successIcon
  };

  return (
    <div style={style}>
      <img src={alertIcons[type]} />
      {children}
    </div>
  );
}

export default Alert;
