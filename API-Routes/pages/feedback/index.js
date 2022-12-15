import { buildFeedbackPath, extractFeedback } from '../api/feedback';

function FeedbackPage(props) {
  return (
    <ul>
      {props.feedbackItems.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}

// We should not use fetch inside getStati/ServerProps to
//talk to our own API
export async function getStaticProps() {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  return {
    props: { feedbackItems: data },
  };
}

export default FeedbackPage;
