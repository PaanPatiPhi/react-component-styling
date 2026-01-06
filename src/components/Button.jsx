function Button({ type }) {
  const primary = {
    backgroundColor: "#074EE8",
    color: "#ffffff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",

  };

  const secondary = {
    backgroundColor: "#07A4E8",
    color: "#ffffff",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",

  };

  const style = type === "primary" ? primary : secondary;

  return <button style={style}>Button</button>;
}

export default Button;
