import Link from 'next/link';
import { Fragment } from 'react';

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page!</h1>
      <ul>
        <li>
          <Link href="/news/next-js-isgreat">NextJs is a great framework</Link>
        </li>
        <li>Nezt Js is the bestttt</li>
      </ul>
    </Fragment>
  );
}

export default HomePage;
