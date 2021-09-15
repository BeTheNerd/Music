import { useState } from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const Songs = () => {
  const [songs, setSong] = useState([

    {id:1, artist: "fall out boy", song: "Irrisitable", link: "https://www.cuindependent.com/new/wp-content/uploads/2018/02/1600px-Fall_out_Boy_Monumentour.jpg"},
    {id:2, artist: "britney", song: "Lucky", link: "https://www.rollingstone.com/wp-content/uploads/2011/03/britneyspears.jpg?resize=1800,1200&w=1800"},
    {id:3, artist: "marina", song: "venus fly trap", link: "https://assets.vogue.com/photos/5891ac9afb0604bf1f5c4b32/master/pass/holding-marina-and-the-diamonds.jpg"},
    {id:4, artist: "kanye", song: "Power", link: "https://media.gq.com/photos/5ad93798ceb93861adb912d8/16:9/w_2560%2Cc_limit/kanye-west-0814-GQ-FEKW01.01.jpg"}

  ])

  const renderSongs = () => {
    return songs.map((s) => (
       <div>
         <Card style={{margin: "20px"}}>
    <Image src={s.link} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{s.artist}</Card.Header> 
      <Card.Header>{s.song}</Card.Header> 
      {/* <p>{s.song}</p>  */}
    </Card.Content>
    <Card.Content extra>
      
    </Card.Content>
  </Card>
        
        </div>
      )
    )
  }

  return(
    <div>
      
      <h2>List of Songs:</h2>
      {renderSongs()}
    </div>
  );
};


export default Songs