import React, { useEffect, useState } from "react";

import FeedbackButton from "./components/FeedbackButton/FeedbackButton";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification.jsx";

import "./App.css";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [totalFeedBack, setTotalFeedBack] = useState(0);

  useEffect(() => {
    setTotalFeedBack(good + neutral + bad);
  }, [good, neutral, bad]);

  const positivePercentage =
    totalFeedBack > 0 ? Math.floor((good / totalFeedBack) * 100) : 0;

  return (
    <div className="App">
      <Section title={"Please leave feedback"}>
        <FeedbackButton
          type={"Good"}
          onClick={() => setGood((prevState) => prevState + 1)}
        />
        <FeedbackButton
          type={"Neutral"}
          onClick={() => setNeutral((prevState) => prevState + 1)}
        />
        <FeedbackButton
          type={"Bad"}
          onClick={() => setBad((prevState) => prevState + 1)}
        />
      </Section>
      <Section title={"Statistics"}>
        {totalFeedBack > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedBack}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message={"No feedback given"} />
        )}
      </Section>
    </div>
  );
};

export default App;
