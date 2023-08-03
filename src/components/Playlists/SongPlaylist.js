import { useDispatch, useSelector } from "react-redux";

import { addSong, removeSong } from "../../store";
import { createRandomSong } from "../../data";

function SongPlaylist() {
  // To Do:
  // Get list of songs

  const dispatch = useDispatch();
  const songPlaylist = useSelector((state) => {
    return state.songs;
  })

  const handleSongAdd = (song) => {
    console.log({song});
    // To Do:
    // Add song to list of songs
    const action = addSong(song);
    dispatch(action);
  };
  const handleSongRemove = (song) => {
    // To Do:
    // Remove song from list of songs
    const action = removeSong(song);
    dispatch(action);
  };

  const renderedSongs = songPlaylist.map((song) => {
    return (
      <li key={song}>
        {song}
        <button
          onClick={() => handleSongRemove(song)}
          className="button is-danger"
        >
          X
        </button>
      </li>
    );
  });

  return (
    <div className="content">
      <div className="table-header">
        <h3 className="subtitle is-3 text-white">Song Playlist</h3>
        <div className="buttons">
          <button
            onClick={() => handleSongAdd(createRandomSong())}
            className="button is-link"
          >
            + Add Song to Playlist
          </button>
        </div>
      </div>
      <ul>{renderedSongs}</ul>
    </div>
  );
}

export default SongPlaylist;
