function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
}

//If this function is in the file it will execute before
//the component function. It prepares the props.
//Code is not available on the client side and an object with props key should be returned
// All of this happens during build time
// can use credentials or code which accesses the file system
export async function getStaticProps() {
  return {
    props: {
      products: [{ id: 'p1', title: 'Product 1' }],
    },
  };
}

export default HomePage;
