function Square({ value, onClick }) {
  return (
    <button className="square" onClick={onClick}>
      <span
        className="square-text"
        style={{ color: value === "X" ? "red" : "black" }}
      >
        {value}
      </span>{" "}
    </button>
  );
}

export default Square;
