import { useRouter } from 'next/router';

function BlogPostPage() {
  const router = useRouter();

  //anything after blog is caught by this page component in an array
  // example .../blog/2020/12
  console.log(router.query);
  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
}

export default BlogPostPage;
