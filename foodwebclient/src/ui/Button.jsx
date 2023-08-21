import "../style/button.css";

const Button = ({ children, className, style, onClick, type }) => {
  return (
    <>
      <button
        type={type}
        className={`custom-button ${className}`}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
