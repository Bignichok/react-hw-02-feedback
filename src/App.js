import React, { Component } from "react";
import "./App.css";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification.jsx";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (type) => {
    this.setState((state) => {
      return {
        [type]: state[type] + 1,
      };
    });
  };

  totalFeedBack = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const totalFeedBack = this.totalFeedBack();
    const positivePercentage =
      totalFeedBack > 0 ? Math.floor((good / totalFeedBack) * 100) : 0;
    return (
      <div className="App">
        <Section title={"Please leave feedback"}>
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} />
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
  }
}

export default App;
