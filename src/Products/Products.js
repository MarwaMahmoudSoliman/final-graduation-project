import "./Product.css";

const Products = ({ result }) => {
  
  return (
    <>
      <section className="card-container" style={{marginLeft:"380px"}}>{result}</section>
    </>
  );
};

export default Products;
