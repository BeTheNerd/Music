import React from "react";
import SongForm from "./SongForm";

class Song extends React.Component {
  state = { showForm: false };
  toggleForm = () => {
    showForm: !this.state.showForm,
  };
};
render( {
  if (this.state.showForm) {
    return (
      <>
        toggleForm={this.toggleForm}
        updateSong={this.props.updateSong}
      </>
    );
  }


}

export default Song;