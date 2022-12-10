function UserProfilePage(props) {
  return <h1>{props.username}</h1>;
}

export default UserProfilePage;

//This executes on the server for every request
// We get access to the full req/res object (default node.js objects)
// This is used for highly dynamic data
export async function getServerSideProps(context) {
  const { params, req, res } = context;

  return {
    props: {
      username: 'Max',
    },
  };
}
