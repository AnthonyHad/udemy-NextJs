import Head from 'next/head';
import { Fragment } from 'react';
import AllPosts from '../../components/posts/all-posts';
import { getAllPosts } from '../../helpers/posts-util';

function AllPostsPage(props) {
  const { posts } = props;

  return (
    <Fragment>
      <Head>
        <title>All Posts</title>
        <meta name="description" content="list of programming tutorials" />
      </Head>
      <AllPosts posts={posts} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
  };
}

export default AllPostsPage;
