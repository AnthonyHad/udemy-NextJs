import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A First Meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg',
    address: 'Rue Saint Hyacinthe, 12345',
    description: 'This is a first meetup',
  },
  {
    id: 'm2',
    title: 'A Second Meetup again?',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/6/6e/Paris_-_Eiffelturm_und_Marsfeld2.jpg',
    address: 'Rue Saint Barbara, 12345',
    description: 'This is a second meetup',
  },
];

function HomePage() {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
}

export default HomePage;
