import { buildFeedbackPath, extractFeedback } from '../api/feedback';
import { Fragment, useState } from 'react';
function FeedbackPage(props) {
  const [feedbackData, setFeedbackData] = useState();

  function loadFeedbackHandler(id) {
    fetch(`/api/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setFeedbackData(data.feedback);
      }); // /api/some-feedback-id
  }

  return (
    <Fragment>
      {feedbackData && <p>{feedbackData.email}</p>}
      <ul>
        {props.feedbackItems.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={loadFeedbackHandler.bind(null, item.id)}>
              Show Details
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
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
