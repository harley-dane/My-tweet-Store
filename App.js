import React from "react";
import Tweet from "./Tweet";

function App() {
  return(
<div className="app">

 <Tweet name="Elias Clair"  message= "This is a random tweet" likes="10000 likes"/>
 <Tweet name="Akeem Clair" message= "I am the true King" likes="100000 likes"/>
 <Tweet name="Harley Clair" message= "I am a true millionair" likes="100000 likes"/>
 <Tweet name="Alma Mora" message= "Harley is my Husband" likes="100000 likes"/>

</div>
  ); 
}

export default App;
