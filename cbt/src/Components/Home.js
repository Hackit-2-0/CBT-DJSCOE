import React, { useContext, useState, useRef } from "react";
import { context } from "./Context/context";
import Styled from "styled-components";
import random from "randomstring";
import PropTypes from "prop-types";

import ChatBot from "react-simple-chatbot";
export default function Home() {
  let [count, setCount] = useState();
  const [data, setData] = useState();
  const contexts = useContext(context);

  const steps = [
    {
      id: "1",
      message: "What is your name?",
      trigger: "name"
    },
    {
      id: "name",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}! What is your gender?",
      trigger: "gender"
    },
    {
      id: "gender",
      options: [
        { value: "male", label: "Male", trigger: "5" },
        { value: "female", label: "Female", trigger: "5" }
      ]
    },
    {
      id: "5",
      message: "How old are you?",
      trigger: "age"
    },
    {
      id: "age",
      user: true,
      trigger: "7",
      validator: value => {
        if (isNaN(value)) {
          return "value must be a number";
        } else if (value < 0) {
          return "value must be positive";
        } else if (value > 120) {
          return `${value}? Come on!`;
        }
        return true;
      }
    },
    {
      id: "7",
      message: "Great! Check out your summary",
      trigger: "review"
    },
    {
      id: "review",
      component: <Review />,
      asMessage: true,
      trigger: "update"
    },
    {
      id: "update",
      message: "Would you like to update some field?",
      trigger: "update-question"
    },
    {
      id: "update-question",
      options: [
        { value: "yes", label: "Yes", trigger: "update-yes" },
        { value: "no", label: "No", trigger: "end-message" }
      ]
    },
    {
      id: "update-yes",
      message: "What field would you like to update?",
      trigger: "update-fields"
    },
    {
      id: "update-fields",
      options: [
        { value: "name", label: "Name", trigger: "update-name" },
        { value: "gender", label: "Gender", trigger: "update-gender" },
        { value: "age", label: "Age", trigger: "update-age" }
      ]
    },
    {
      id: "update-name",
      update: "name",
      trigger: "7"
    },
    {
      id: "update-gender",
      update: "gender",
      trigger: "7"
    },
    {
      id: "update-age",
      update: "age",
      trigger: "7"
    },
    {
      id: "end-message",
      message: "Thanks! Your data was submitted successfully!",
      trigger: "feelings"
    },
    {
      id: "feelings",
      message:
        "How often have you been bothered by feeling down, depressed or hopeless?",
      trigger: "feeling"
    },
    {
      id: "feeling",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "pleasure" },
        { value: "Several days", label: "Several days", trigger: "pleasure" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "pleasure"
        }
      ]
    },
    {
      id: "pleasure",
      message:
        "How often have you had little interest or pleasure in doing things?",
      trigger: "pleasures"
    },
    {
      id: "pleasures",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "sleep" },
        { value: "Several days", label: "Several days", trigger: "sleep" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "sleep"
        }
      ]
    },

    {
      id: "sleep",
      message:
        "How often have you been bothered by trouble falling or staying asleep, or sleeping too much?",
      trigger: "sleeps"
    },
    {
      id: "sleeps",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "energy" },
        { value: "Several days", label: "Several days", trigger: "energy" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "energy"
        }
      ]
      //   nexr question
    },

    {
      id: "energy",
      message:
        "How often have you been bothered by feeling tired or having little energy?",
      trigger: "energies"
    },
    {
      id: "energies",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "appetite" },
        { value: "Several days", label: "Several days", trigger: "appetite" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "appetite"
        }
      ]
    },
    {
      id: "appetite",
      message:
        "How often have you been bothered by poor appetite or overeating?",
      trigger: "appetites"
    },
    {
      id: "appetites",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "failure" },
        { value: "Several days", label: "Several days", trigger: "failure" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "failure"
        }
      ]
    },

    {
      id: "failure",
      message:
        "How often have you been bothered by feeling bad about yourself, or that you are a failure, or have let yourself or your family down?",
      trigger: "failures"
    },
    {
      id: "failures",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "concentrating" },
        {
          value: "Several days",
          label: "Several days",
          trigger: "concentrating"
        },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "concentrating"
        }
      ]
    },

    {
      id: "concentrating",
      message:
        "How often have you been bothered by trouble concentrating on things, such as reading the newspaper or watching television?",
      trigger: "concentratings"
    },
    {
      id: "concentratings",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "fidgety" },
        { value: "Several days", label: "Several days", trigger: "fidgety" },
        { value: "More than half the days", label: "More than half the days" }
      ]
    },

    {
      id: "fidgety",
      message:
        "How often have you been bothered by moving or speaking so slowly that other people could have noticed, or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
      // "How often have you been bothered by feeling tired or having little energy?",
      trigger: "fidgetys"
    },
    {
      id: "fidgetys",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "anxiety" },
        { value: "Several days", label: "Several days", trigger: "anxiety" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "anxiety"
        }
      ]
    },

    {
      id: "anxiety",
      message:
        "Have you had an anxiety attack (suddenly feeling fear or panic)?",
      trigger: "anxious"
    },
    {
      id: "anxious",
      options: [
        { value: "yes", label: "Yes", trigger: "nervous" },
        { value: "no", label: "no", trigger: "nervous" }
      ]
    },

    //
    {
      id: "nervous",
      message:
        " How often have you been bothered by feeling nervous, anxious or on edge",
      trigger: "nervouss"
    },
    {
      id: "nervouss",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "worrying" },
        { value: "Several days", label: "Several days", trigger: "worrying" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "worrying"
        }
      ]
    },

    {
      id: "worrying",
      message:
        "How often have you been bothered by not being able to stop or control worrying?",
      // "How often have you been bothered by feeling tired or having little energy?",
      trigger: "worryings"
    },
    {
      id: "worryings",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "different" },
        { value: "Several days", label: "Several days", trigger: "different" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "different"
        }
      ]
    },

    {
      id: "different",
      message:
        "How often have you been bothered by worrying too much about different things?",
      // "How often have you been bothered by not being able to stop or control worrying?",
      // "How often have you been bothered by feeling tired or having little energy?",
      trigger: "differents"
    },
    {
      id: "differents",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "relaxing" },
        { value: "Several days", label: "Several days", trigger: "relaxing" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "relaxing"
        }
      ]
    },

    {
      id: "relaxing",
      message:
        // "How often have you been bothered by worrying too much about different things?",
        "How often have you been bothered by having trouble relaxing?",
      trigger: "relaxatio"
    },
    {
      id: "relaxatio",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "still" },
        { value: "Several days", label: "Several days", trigger: "still" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "stills"
        }
      ]
    },

    {
      id: "still",
      message:
        "How often have you been bothered by being so restless that it is hard to sit still?",
      trigger: "stills"
    },
    {
      id: "stills",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "irritable" },
        { value: "Several days", label: "Several days", trigger: "irritable" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "irritated"
        }
      ]
    },

    {
      id: "irritable",
      message:
        "How often have you been bothered by becoming easily annoyed or irritable?",
      // "How often have you been bothered by not being able to stop or control worrying?",
      // "How often have you been bothered by feeling tired or having little energy?",
      trigger: "irritated"
    },
    {
      id: "irritated",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "afraid" },
        { value: "Several days", label: "Several days", trigger: "afraid" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "afraid_of"
        }
      ]
    },
    {
      id: "afraid",
      message:
        "How often have you been bothered by feeling afraid as if something awful might happen?",
      trigger: "afraid_of"
    },
    {
      id: "afraid_of",
      options: [
        { value: "Not at all", label: "Not at all", trigger: "wall" },
        { value: "Several days", label: "Several days", trigger: "wall" },
        {
          value: "More than half the days",
          label: "More than half the days",
          trigger: "wall"
        }
      ]
    },

    {
      id: "wall",
      message: "Have you been bothered by worrying about any of the following?",
      trigger: "finals"
    },
    {
      id: "finals",
      options: [
        {
          value: "Your weight or how you look,",
          label: "weight",
          trigger: "done"
        },
        {
          value: "Little or no sexual desire or pleasure during sex",
          label: "Several days",
          trigger: "done"
        },
        {
          value: "Difficulties with your partner",
          label: "partner",
          trigger: "final"
        },
        {
          value: "The stress of taking care of family members",
          label: "stress",
          trigger: "final"
        },
        {
          value: "Stress at work, school or outside home",
          label: "work",
          trigger: "final"
        },
        {
          value: "By financial problems or worries",
          label: "financial",
          trigger: "final"
        },
        {
          value: "Having no one to turn to",
          label: "turn",
          trigger: "final"
        }
      ]
    },

    {
      id: "final",
      component: <Form />,
      asMessage: true,
      end: true
    }
  ];
  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
}

const Review = () => {
  return <div>{random.generate(7)}</div>;
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      gender: "",
      age: "",
      feeling: "",
      pleasures: "",
      sleeps: "",
      energies: "",
      appetites: "",
      failures: "",
      concentratings: "",
      fidgetys: "",
      anxious: "",
      nervouss: "",
      worryings: "",
      differents: "",
      relaxatio: "",
      stills: "",
      irritated: "",
      afraid_of: ""
    };
  }
  componentWillMount() {
    const { steps } = this.props;
    const {
      name,
      gender,
      age,
      feeling,
      pleasures,
      sleeps,
      energies,
      appetites,
      failures,
      concentratings,
      fidgetys,
      anxious,
      nervouss,
      worryings,
      differents,
      relaxatio,
      stills,
      irritated,
      afraid_of
    } = steps;

    this.setState({
      name,
      gender,
      age,
      feeling,
      pleasures,
      sleeps,
      energies,
      appetites,
      failures,
      concentratings,
      fidgetys,
      anxious,
      nervouss,
      worryings,
      differents,
      relaxatio,
      stills,
      irritated,
      afraid_of
    });
  }

  render() {
    return (
      <div>
        <div>
          <div>Your Responses</div>
          <span>{this.state.name.value}</span> <br />
          <span>{this.state.pleasures.value}</span> <br />
          <span>{this.state.sleeps.value}</span> <br />
          <span>{this.state.energies.value}</span> <br />
          <span>{this.state.appetites.value}</span> <br />
          <span>{this.state.failures.value}</span> <br />
          <span>{this.state.concentratings.value}</span> <br />
          <span>{this.state.fidgetys.value}</span> <br />
          <span>{this.state.anxious.value}</span> <br />
          <span>{this.state.nervouss.value}</span> <br />
          <span>{this.state.differents.value}</span> <br />
          <span>{this.state.relaxatio.value}</span> <br />
          <span>{this.state.stills.value}</span> <br />
          <span>{this.state.irritated.value}</span> <br />
          <span>{this.state.afraid_of.value}</span> <br />
          <button
            onClick={() => {
              const not = "not at all";
              const several = "Several days";
              const more = "More than half the days";
              //   if(this.state.name.values === not || this.state.pleasures.value === not || this.state.sleeps.value === not || this.state.energies.value === not || this.state.appetites.value === not || this.state.failures.value === not || this.state.concentratings.value === not || this.state.fidgetys.value === not  || this.state.anxious.value === not || this.state.nervouss.value === not || this.state.differents.value === not || this.state.relaxatio.value === not || this.state.stills.value === not || this.state.irritated.value === not || this.state.afraid_of.value === not ){
              //             not_count++;
              //  }
              //  if(this.state.name.values === several || this.state.pleasures.value === several || this.state.sleeps.value === several || this.state.energies.value === several || this.state.appetites.value === several || this.state.failures.value === several || this.state.concentratings.value === several || this.state.fidgetys.value === several  || this.state.anxious.value === several || this.state.nervouss.value === several || this.state.differents.value === several || this.state.relaxatio.value === several || this.state.stills.value === several || this.state.irritated.value === several || this.state.afraid_of.value === several ){
              //     several_count++;
              // }
              // if(this.state.name.values === several || this.state.pleasures.value === several || this.state.sleeps.value === several || this.state.energies.value === several || this.state.appetites.value === several || this.state.failures.value === several || this.state.concentratings.value === several || this.state.fidgetys.value === several  || this.state.anxious.value === several || this.state.nervouss.value === several || this.state.differents.value === several || this.state.relaxatio.value === several || this.state.stills.value === several || this.state.irritated.value === several || this.state.afraid_of.value === several ){
              //     several_count++;
              // }

              // if
            }}
          >
            Check Your Stats
          </button>
        </div>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object
};

Review.defaultProps = {
  steps: undefined
};
