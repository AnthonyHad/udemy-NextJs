import AllPosts from '../../components/posts/all-posts';

function AllPostsPage() {
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
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
