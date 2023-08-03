import React from 'react';
import { useDispatch } from "react-redux";
import { reset } from '../../store';

import MoviePlaylist from './MoviePlaylist'
import SongPlaylist from './SongPlaylist'

const Playlist = () => {
    const dispatch = useDispatch();
  const handleResetClick = () => {
    //
    dispatch(reset());

  };
  return (
    <div className="container is-fluid bg-slate-100 p-8 mb-8">
        
      <button onClick={() => handleResetClick()} className="button is-danger">
        Reset Both Playlists
      </button>
      <hr />
      <MoviePlaylist />
      <hr />
      <SongPlaylist />
    </div>
  )
}

export default Playlist