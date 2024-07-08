import "./Colors.css";
import Input from "../../components/Input";

import { useTranslation } from 'react-i18next';

const Colors = ({ handleChange }) => {
  const { t } = useTranslation();
  return (
    <>
       <div className="ml" style={{borderLeft:"1px solid gray",borderRight:"1px solid gray" ,borderBottom:"1px solid gray",borderTop:"transparent",paddingRight:"24px",paddingLeft:"19px",width:"265px",marginLeft:"95px"}}>
        <h2 className="">{t('Tag')}</h2>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
       Clear All Filters
        </label>

        {/* <Input
          handleChange={handleChange}
          value="Pole Dancing Video Course with Noelle Wood"
          title="Pole Dancing Video Course with Noelle Wood"
          name="test1"
          // color="black"
        />

        <Input
          handleChange={handleChange}
          value="How to Write the Ultimate 1 Page Strategic Business Plan"
          title="How to Write the Ultimate 1 Page Strategic Business Plan"
          name="test1"
          // color="blue"
        />

        <Input
          handleChange={handleChange}
          value="100 Days Of Code – 2023 Web Development Bootcamp"
          title="100 Days Of Code – 2023 Web Development Bootcamp "
          name="test1"
          // color="red"
        />

        <Input
          handleChange={handleChange}
          value="User Experience The Ultimate Guide to Usability and UX"
          title="User Experience The Ultimate Guide to Usability and UX "
          name="test1"
          // color="green"
        />
 <Input
          handleChange={handleChange}
          value="Complete Guitar Lessons System Beginner to Advanced "
          title="Complete Guitar Lessons System Beginner to Advanced "
          name="test1"
          // color="green"
        />
         <Input
          handleChange={handleChange}
          value="How to Market Yourself as Coach or Consultant Market "
          title="How to Market Yourself as Coach or Consultant Market  "
          name="test1"
          // color="green"
        />
         <Input
          handleChange={handleChange}
          value="Education  "
          title="Education  "
          name="test1"
          // color="green"
        />
         <Input
          handleChange={handleChange}
          value="LMS "
          title="LMS  "
          name="test1"
          // color="green"
//           LMS
// Marketing
// Online
// SEO
// Web development

        /> */}
        {/* <Input
          handleChange={handleChange}
          value="Marketing "
          title="Marketing  "
          name="test1"
          // color="green"

// Online
// SEO
// Web development

        />
         <Input
          handleChange={handleChange}
          value="Marketing "
          title="Marketing  "
          name="test1"
          // color="green"

// Online
// SEO
// Web development

        />
         <Input
          handleChange={handleChange}
          value="Marketing "
          title="Marketing  "
          name="test1"
          // color="green"

// Online
// SEO
// Web development

        />
         <Input
          handleChange={handleChange}
          value="Online "
          title="Online  "
          name="test1"
          // color="green"

// Online
// SEO
// Web development

        />
        <Input
          handleChange={handleChange}
          value="SEO "
          title="SEO "
          name="test1"
          // color="green"


// Web development

        /> */}
        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="    Web  Development "
            name="test1"
          />
          
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
        Web  Development
        </label> */}
      </div>
    </>
  );
};

export default Colors;
