import React from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import './App.global.css';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/away">
        <button type="button">Go to Away</button>
      </Link>
    </div>
  );
};

const Away = () => {
  const [playing, setPlaying] = React.useState(false);
  const [videoUrl, setVideoUrl] = React.useState('../vid2.mp4');

  return (
    <div>
      <h1>Away</h1>
      {[
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19,
        20,
        21,
        22,
        23,
        24,
        25,
        26,
        27,
        28,
        29,
      ].map((key) => {
        return (
          <ReactPlayer
            key={key}
            url={videoUrl}
            controls="true"
            playing={playing}
          />
        );
      })}

      <Link to="/">
        <button type="button">Go to Home</button>
      </Link>

      <button type="button" onClick={() => setPlaying(true)}>
        play!!!
      </button>
      <button type="button" onClick={() => setPlaying(false)}>
        pause!
      </button>
      <button
        type="button"
        onClick={() =>
          videoUrl === null ? setVideoUrl('../vid2.mp4') : setVideoUrl(null)
        }
      >
        toggle vid url
      </button>
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/away" component={Away} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}
