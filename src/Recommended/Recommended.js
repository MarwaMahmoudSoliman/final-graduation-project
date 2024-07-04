import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div style={{marginLeft:"80px"}} >
        <h2 className="recommended-title">Short By</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" type="All  Release Date (newest first)" />

          <Button onClickHandler={handleClick} value="Business" type="Business" />
          <Button onClickHandler={handleClick} value="Accounting" type="Accounting" />
          <Button onClickHandler={handleClick} value="Development" type="Development" />
          <Button onClickHandler={handleClick} value="marketing" type="marketing" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
