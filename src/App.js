import { Component } from 'react';
import Song from './Song';
import Songs from "./Songs";
import SongForm from "./SongForm";
import './App.css';

class App extends Component {
  state = {
    songs: [
      { id: 1, artist: "Marina", song: "Oh no!"},
      { id: 1, artist: "Avril Lavigne", song: "Complicated"},
      { id: 1, artist: "Fall Out boy", song: "Irresistible"},
    ],
  };
  async componentDidCatch() {
    console.log("mounted");
  }
};
// add update
componentDidUpdate(); {
  console.log("update");
}

addSong = (song) => {
  console.log("song");
  this.setState({
    songs:[song, ...this.state.songs],
  });
};

updateSong = (song) => {
  let updateSongs = this.state.songs.map((s) =>
    s.id === song.id ? song : s
  );

  this.setState({
    songs: updateSongs,
  });
};

deleteSongs = (id) => {
  let filteredSongs = this.state.songs.filter((s) => s.id !== id);
  this.setState({
    songs: filteredSongs,
  });
};

render() {
  return (
    
        <div>
        <Song/> 
        addSong={this.addSong},
        updateSong={this.updateSong},
        deleteSong={this.deleteSong},
        songs={this.state.songs}
        </div>
  );
}
};



export default App;
