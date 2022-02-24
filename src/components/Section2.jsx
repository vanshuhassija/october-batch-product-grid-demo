import { useState } from "react";
import { Button } from "react-bootstrap";

function Section2(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  console.log("Price", price, props.selectedProduct);

  function submitForm(e) {
    e.preventDefault();
    const previousData = [...props.products];
    const product = previousData.find(
      (pro) => pro.name === props.selectedProduct.name
    );
    if (product) {
      product.name = name;
      product.price = price;
      product.imageUrl = product.imageUrl;
      props.setProducts(previousData);
    }
  }

  if (!props.selectedProduct) {
    return <div style={{ color: "gray" }}>Please select a product first</div>;
  }
  if (props.shouldUpdateProduct) {
    return (
      <form onSubmit={submitForm}>
        <input
          placeholder="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder="price"
          type="number"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <button type="submit">Update Product</button>
      </form>
    );
  }
  return (
    <div className="d-flex flex-column">
      <h1>Showing Details for {props.selectedProduct.name}</h1>
      <h4>Price:{props.selectedProduct.price}</h4>
      <Button
        variant="primary"
        onClick={() => {
          props.setShowImage(true);
        }}
      >
        Photo Dikhao
      </Button>{" "}
    </div>
  );
}

export default Section2;
