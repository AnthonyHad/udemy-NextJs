import { useRef } from 'react';

function HomePage() {
  const email = useRef();
  const feedback = useRef();

  function submitFormHandler(event) {
    event.preventDefault();
    const enteredEmail = email.current.value;
    const enteredFeedback = feedback.current.value;

    const reqBody = { email: enteredEmail, text: enteredFeedback };
    console.log(reqBody);

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
    </div>
  );
}

export default HomePage;
