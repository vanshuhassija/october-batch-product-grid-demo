import { ListGroup, Button } from "react-bootstrap";

function Section1(props) {
  function deleteProduct(product) {
    const remainingProducts = props.products.filter(
      (pro) => pro.name !== product.name
    );
    props.setProducts(remainingProducts);
  }

  return (
    <ListGroup>
      {props.products.map((product) => {
        return (
          <ListGroup.Item
            key={product.name}
            onClick={() => {
              props.setSelectedProduct(product);
              props.setShowImage(false);
              props.setShouldUpdateProduct(false);
            }}
          >
            {product.name}

            <Button
              variant="danger"
              className="ml-3"
              onClick={() => {
                deleteProduct(product);
              }}
            >
              Delete
            </Button>
            <Button
              variant="secondary"
              className="ml-4"
              onClick={(e) => {
                e.stopPropagation();
                props.setSelectedProduct(product);
                props.setShouldUpdateProduct(true);
              }}
            >
              Update
            </Button>
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
}

export default Section1;
