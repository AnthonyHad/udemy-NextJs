import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';

import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextjs',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs2',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs3',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextjs4',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
