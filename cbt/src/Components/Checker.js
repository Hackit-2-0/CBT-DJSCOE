import React, { Component } from "react";
import Swipeable from "react-swipy";
import axios from "axios";

import Card from "./Context/Card";
import Button from "./Context/Button";
import { checkPropTypes } from "prop-types";

const appStyles = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  width: "100%",
  minHeight: "100vh",
  fontFamily: "sans-serif",
  overflow: "hidden"
};

const wrapperStyles = { position: "relative", width: "450px", height: "400px" };
const actionsStyles = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
  width: "300px"
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
                                  msg: ""
                                });
                              })
                              .catch(err => {
                                console.log(err);
                              });
                          } else {
                            alert(
                              "Thanks for giving intense test You belong to" +
                                this.state.newer[this.state.newer.length - 1]
                            );
                            this.setState({
                              count: 0
                            });
                          }
                        }
                      }}
                    >
                      <input
                        placeholder="your response"
                        name="data"
                        value={this.state.msg}
                        style={{
                          width: "420px",
                          height: "50px"
                        }}
                        onChange={e => {
                          this.setState({
                            msg: e.target.value
                          });
                        }}
                      />
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
          {this.state.newer.length > 0 ? (
            <div>
              The Category you belong is
              <br />
              <b>{this.state.newer[this.state.newer.length - 1]}</b>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Checker;
