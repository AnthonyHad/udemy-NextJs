import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://upload.wikimedia.org/wikipedia/commons/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg"
      title="A First Meetup"
      address="Some Street 5, Some City"
      description="Lovely Strkware meetup happening"
    />
  );
}

export function getStaticPaths() {
  return {
    fallback: false, // false means that you indicated all of the paths
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  //fetch the data to a single meetup

  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {};
}

export default MeetupDetails;
