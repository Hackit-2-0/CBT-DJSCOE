import React from "react";
import { Grid, Image } from "semantic-ui-react";
import ReactPlayer from "react-player";
import Navbar from "./Navbar";
import { Header } from "semantic-ui-react";
import fs from "fs";

export default function Therapy() {
  let [data, setData] = React.useState("val");
  React.useEffect(() => {
    // fs.exists("learned.txt", exists => {
    //   if (exists) {
    //     let datas = fs.readFileSync("learned.txt");
    //     setData(datas);
    //   }
    // });
  }, [data]);
  return (
    <div>
      <Navbar />
      <Grid celled="internally">
        <Header>Featured video on Axiety</Header>
        <Grid.Row>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=P8HoDPgZcak"
            youtubeConfig={{
              playerVars: {
                showinfo: 1
              }
            }}
          />
          <ReactPlayer
            url="https://www.youtube.com/watch?v=e7dZicpqY44"
            youtubeConfig={{
              playerVars: {
                showinfo: 1
              }
            }}
          />
        </Grid.Row>
      </Grid>
      <Header>Featured video on Depression</Header>
      <Grid.Row>
        <ReactPlayer
          url="  https://www.youtube.com/watch?v=0uf4hVy0OCs"
          youtubeConfig={{
            playerVars: {
              showinfo: 1
            }
          }}
        />
        <ReactPlayer
          url="https://www.youtube.com/watch?v=P8HoDPgZcak"
          youtubeConfig={{
            playerVars: {
              showinfo: 1
            }
          }}
        />
      </Grid.Row>
    </div>
  );
}
