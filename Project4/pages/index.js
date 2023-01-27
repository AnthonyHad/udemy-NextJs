import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';

import Hero from '../components/home-page/hero';

const DUMMY_POSTS = [
  {
    slug: 'getting-started-with-nextJS',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextJS2',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextJS3',
    title: 'getting-started-with-nextJS',
    image: 'getting-started-nextjs.png',
    excerpt:
      'NextJS is the react Framework for production - it makes building react apps a breeze!',
    date: '2022-02-10',
  },
  {
    slug: 'getting-started-with-nextJS4',
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
