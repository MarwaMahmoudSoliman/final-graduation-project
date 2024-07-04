const Button = ({ onClickHandler, value, type }) => {
    return (
      <button onClick={onClickHandler} value={value} className="btns">
        {type}
      </button>
    );
  };
  
  export default Button;
  