import React from 'react';
var data={performer: 'Rammstein', album: 'Rosenrot', year: '2005'}
const playlist=[
  'Benzin','Mann gegen Mann','Rosenrot','Spring','Wo bist du','Stirb nicht vor mir',
  'Zerstören','Hilf mir','Te quiero puta!','Feuer & Wasser','Ein Lied'
];
const listItems = playlist.map((playlist) =>
  <li>{playlist}</li>
);
class Albom extends React.Component{
  render(){
    return(
    <div className="albom">
      <span>Виконавець</span>
      <Performer />
      <span>Треки</span>
      <Playlist />
     </div>
    );
  }
}

class Playlist extends React.Component{
  render(){
    return(
    <ul>
      {listItems}
    </ul>
    );
  }
}
function Data(props) {
  return(
  <div>
    <h2>{props.performer}</h2>
    <p><strong>{props.album}</strong>{props.year}</p>
  </div>
    );
}

function Performer() {
  return (
    <div>
      <Data performer="Rammstein" />
      <Data album="Rosenrot" />
      <Data year="2005" />
    </div>
  );
}

export default Albom;

