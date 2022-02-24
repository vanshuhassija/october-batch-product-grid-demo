function Section3(props) {
  if (props.imageUrl) {
    return <img src={props.imageUrl} alt="product" width="200px" />;
  }
  return null;
}

export default Section3;
