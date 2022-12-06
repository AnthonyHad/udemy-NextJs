import fs from 'fs/promises';
import path from 'path';

import Link from 'next/link';

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

//If this function is in the file it will execute before
//the component function. It prepares the props.
//Code is not available on the client side and an object with props key should be returned
// All of this happens during build time
// can use credentials or code which accesses the file system
// However, if the data changes we have to rebuild the page. Or use ISR
// ISR > Pre-generate then Re-generate it on every request at most every X seconds
// serve old page or serve new
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: '/no-data',
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    //key to use ISR
    revalidate: 10,
  };
}

export default HomePage;
