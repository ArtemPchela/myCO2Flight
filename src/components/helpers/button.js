import "../../assets/styles/button.css";

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;
