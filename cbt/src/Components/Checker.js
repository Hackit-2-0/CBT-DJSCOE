import React, { Component } from "react";
import Swipeable from "react-swipy";
import axios from "axios";
import Map from "./Map";
import Navbar from "../Components/Navbar";
import { Grid, Container, Segment, Input, Icon } from "semantic-ui-react";
import { Launcher } from "react-chatbot-window";

import Card from "./Context/Card";
import Button from "./Context/Button";
import { checkPropTypes } from "prop-types";
import { Cosumer } from "./Context/ClassContext";

const appStyles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = {
  position: "relative",
  width: "450px",
  height: "300px",
  marginBottom: "150px",
  wverflow: "hidden"
};
const actionsStyles = {
  //   display: "flex",
  justifyContent: "space-aroud",
  width: "200px"
};

class Checker extends Component {
  state = {
    cards: ["please type something here"],
    newer: [],
    msg: "",
    count: 0
  };

  remove = () =>
    this.setState(({ cards }) => ({ cards: cards.slice(1, cards.length) }));

  render() {
    const { cards } = this.state;

    return (
      <div>
        <Navbar />
        <Container>
          <div style={appStyles}>
            <div style={wrapperStyles}>
              {cards.length > 0 && (
                <div style={wrapperStyles}>
                  <Swipeable
                    buttons={({ right }) => (
                      <div style={actionsStyles}>
                        <form
                          method="POST"
                          onSubmit={e => {
                            e.preventDefault();
                            if (this.state.msg.length == 0) {
                              alert("the name cannot be empty");
                            } else {
                              if (this.state.cards.length > 10) {
                                if (
                                  this.state.msg.includes("yes") ||
                                  this.state.msg.includes("YES")
                                ) {
                                  this.setState({
                                    count: this.state.count + 1
                                  });
                                }
                                if (
                                  this.state.msg.includes("no") ||
                                  this.state.msg.includes("NO")
                                ) {
                                  if (this.state.count >= 0) {
                                    this.setState({
                                      count: this.state.count + 1
                                    });
                                  }
                                }
                              }
                              if (this.state.count <= 13) {
                                axios
                                  .post("/client", {
                                    msg: this.state.msg
                                  })
                                  .then(data => {
                                    console.log(data.data);
                                    let newers = this.state.newer;
                                    newers.push(data.data.classes);

                                    this.setState({
                                      cards: data.data.related,
                                      newer: newers,
                                      msg: "",
                                      answer: data.data.answer
                                    });
                                  })
                                  .catch(err => {
                                    console.log(err);
                                  });
                              } else {
                                alert(
                                  "Thanks for giving intense test You belong to" +
                                    this.state.newer[
                                      this.state.newer.length - 1
                                    ]
                                );
                                this.setState({
                                  count: 0
                                });
                                console.log(
                                  this.state.newer[this.state.newer.length - 1]
                                );
                                //   fs.writeFileSync(
                                // "learned.txt",
                                // this.state.newer[this.state.newer.length - 1]
                                //   );
                                // window.location.href = "/Therapy";
                              }
                            }
                          }}
                        >
                          <Icon
                            name="arrow alternate circle right"
                            size="huge"
                          />
                          <Segment>Swipe to reject the question</Segment>
                          <Input
                            icon="tags"
                            iconPosition="left"
                            label={{
                              tag: true,
                              content: "Share Intense Emotions"
                            }}
                            labelPosition="right"
                            placeholder="Share Intense Emotions"
                            value={this.state.msg}
                            onChange={e => {
                              this.setState({
                                msg: e.target.value
                              });
                            }}
                          />
                          {/* <input
                            placeholder="your response"
                            name="data"
                            style={{
                              width: "420px",
                              height: "50px"
                            }}
                          /> */}
                          <Button onClick={right}>Accept</Button>
                        </form>
                      </div>
                    )}
                    onAfterSwipe={this.remove}
                  >
                    <Card>{cards[this.state.count]}</Card>
                  </Swipeable>
                  {cards.length > 1 && <Card zIndex={-1}>{cards[1]}</Card>}
                </div>
              )}
              {cards.length <= 1 && <Card zIndex={-2}>No more cards</Card>}
            </div>
            <div>
              <h1
                style={{
                  fontFamily:
                    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;"
                }}
              >
                The questions remaining to go.. ..{" "}
                {Math.abs(13 - this.state.count)}
              </h1>
              {this.state.count === 13 ? (
                <div>
                  <Segment>
                    We have diagnosed you under{" "}
                    {this.state.newer[this.state.newer.length - 1]}
                    <br />
                    Watch our featured videoes
                    <span>
                      <a href="/Therapy">Therapy Session</a>
                    </span>
                  </Segment>
                </div>
              ) : null}
              {this.state.newer.length > 0 ? (
                <Segment>
                  <div>
                    The Category you belong is
                    <br />
                    <b>{this.state.newer[this.state.newer.length - 1]}</b>
                    <span>
                      <br />
                      You Can try to
                      <br />
                      <b>{this.state.answer}</b>
                    </span>
                  </div>
                </Segment>
              ) : null}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Checker;
