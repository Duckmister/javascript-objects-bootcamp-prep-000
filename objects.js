
var playlist = {
  artistName: "The Postal Service",
  songTitle: "Nothing Better"
}

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist
}
