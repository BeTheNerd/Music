import React from "react";



class songForm extends React.Component {
  state = {
    artist: this.props.artist ? this.props.artist : "",
    song: this.props.song ? this.props.song : "",
  };
  handleChange = (s, { value }) => {
    this.setState({
      [e.target.song]: value,
    });
  };
  handleSubmit = (s) => {
    

    if (this.props.id) {
      this.props.updateSong({ id: this.props.id, ...this.state });
      this.props.toggleForm();
    } else {
      this.props.addSong({ id: Math.random(), ...this.state });
    }
    this.setState({
      artist: "",
      song: "",
    });
  };
  render() {
    return (
      <div>
        <h1>Contact Form</h1>
        onSubmit={this.handleSubmit}
          widths="equal"
            
              artist={"artist"}
              onChange={this.handleChange}
              value={this.state.artist}
              label="Artist"
            
            
              artist={"song"}
              onChange={this.handleChange}
              value={this.state.song}
              label="Song"
            
         
          {this.props.id ? "Update" : "Add"}
      </div>
    );
  }
}

export default ContactForm;
