import { useRef, useState } from 'react';

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);
  const email = useRef();
  const feedback = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredFeedback = feedback.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };

    //can add validation here
    fetch('/api/feedback', {
      method: 'POST',
      body: JSON.stringify(reqBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((responses) => responses.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch('api/feedback')
      .then((response) => response.json())
      .then((data) => setFeedbackItems(data.feedback));
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your email address</label>
          <input type="email" id="email" ref={email}></input>
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5" ref={feedback}></textarea>
        </div>
        <button onClick={submitFormHandler}>Send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>Get Feedback</button>
      <ul>
        {feedbackItems.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
