import { useRouter } from 'next/router';

function ClientsProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push('/clients/max/projecta');
  }

  return (
    <div>
      <h1>Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
