import Input from "../../components/Input";
import "./Price.css";
import { useTranslation } from 'react-i18next';

const Price = ({ handleChange }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="ml" style={{borderTop:"transparent",borderLeft:"1px solid gray" ,borderRight:"1px solid gray",paddingBottom:"20px",paddingRight:"10px",paddingLeft:"30px",width:"265px",marginLeft:"95px"}}>
        <h2 className="sidebar-title price-title" style={{backgroundColor:"white" ,textAlign:"left"}}>{t('Price')}</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
       All 
        </label>

        <Input
          handleChange={handleChange}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
