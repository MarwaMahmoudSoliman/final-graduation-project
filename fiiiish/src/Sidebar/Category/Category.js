import "./Category.css";
import Input from "../../components/Input";
import { CiGrid41 } from "react-icons/ci";
function Category({ handleChange }) {
  return (
    <>

  
    <div style={{borderRight:"1px solid gray",borderTop:"1px solid gray",borderLeft:"1px solid gray",paddingBottom:"5px",paddingRight:"10px",paddingLeft:"30px",marginLeft:"95px",paddingTop:"10px",marginTop:"360px" ,width:"265px"}} >
    <h4 style={{textAlign:"left"}}>Search</h4>

    <div style={{ display: 'flex', alignItems: 'center', maxWidth: '200px', border: '1px solid #ccc', borderRadius: '4px', padding: '5px',marginBottom:"3em" ,height:"50px" }}>

  <input
    type="text"
    placeholder="Search..."
    style={{ flex: '1', border: 'none', outline: 'none',width:"120px"}}
  />

  <hr></hr>
  <button style={{ background: 'none', border: 'none', outline: 'none', cursor: 'pointer', padding: '5px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" className="bi bi-search" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.397l3.859 3.858a1 1 0 1 0 1.415-1.415l-3.857-3.84zm-6.242 0a4.5 4.5 0 1 1 1.397-1.397l-3.859-3.858a1 1 0 1 1 1.415-1.415l3.857 3.84z"/>
    </svg>
  </button>
</div>

      <h2 className="sidebar-title" style={{backgroundColor:"white" ,textAlign:"left"}}>Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Accounting "
          title="Accounting "
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Development"
          title="Development"
          name="test"
        />
       
        <Input
          handleChange={handleChange}
          value="Dance "
          title="Dance "
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Design & Art "
          title="Design & Art "
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Development"
          title="Development"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Marketing"
          title="Marketing"
          name="test"
        />
           <Input
          handleChange={handleChange}
          value="Meditation"
          title="Meditation"
          name="test"
        />
           <Input
          handleChange={handleChange}
          value="Music "
          title="Music "
          name="test"
        />
 

      </div>
    </div>
    </>
  );
}

export default Category;
