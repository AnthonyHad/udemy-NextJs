import { useRouter } from 'next/router';

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.pathname);
  console.log(router.query);
  return (
    <div>
      <h1>Specific project page for a Selected client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;
