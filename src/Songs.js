import React from "react";
import Song from "./Song";

const Songs = ({ songs, deleteSong, updateSong }) => (

<div>
 
<>Artist</>
<>Song</>

</div>

  {songs.map((song) => (
    <Song
      updateSong={updateSong}
      deleteSong={deleteSong}
      {...song}
      />
  ))}
);