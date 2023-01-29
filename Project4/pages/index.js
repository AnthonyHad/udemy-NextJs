import { Fragment } from 'react';
import FeaturedPosts from '../components/home-page/featured-posts';

import Hero from '../components/home-page/hero';
import { getFeaturedPosts } from '../helpers/posts-util';

function HomePage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default HomePage;
