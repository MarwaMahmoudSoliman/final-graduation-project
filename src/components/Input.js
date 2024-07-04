const Input = ({ handleChange, value, title, name  }) => {
  // const Input = ({ handleChange, value, title, name, color }) => {
    return (
      <label className="sidebar-label-container">
        <input onChange={handleChange} type="radio" value={value} name={name} />
        <span className="checkmark" ></span>
        {/* <span className="checkmark" style={{ backgroundColor: color }}></span> */}
        {title}
      </label>
    );
  };
  
  export default Input;