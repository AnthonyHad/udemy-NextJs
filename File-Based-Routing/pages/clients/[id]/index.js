import { useRouter } from 'next/router';

function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);
  return (
    <div>
      <h1>Projects of a given client</h1>
    </div>
  );
}

export default ClientsProjectsPage;
