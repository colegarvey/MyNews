import './App.css';
import init_Headlines from './helpers/initHeadlines';
import Home from './components/Home';
// import { useEffect, useState } from "react";

/*
line the top with clickable input boxes by news source and useState to keep track of clicked value
have useEffect to all variable boxes to known when another is clicked, would call API again to get refreshed content
useEffect(() ..
  call to refresh content
,[input boxes values])

make functions to call and change the state of the input boxes
*/

function App() {
  // const [initialized,setInitialized] = useState(false);
  var h = init_Headlines();

  // useEffect( () => {
  //   h = 

  //   if (h.status === 'ok') {
  //     setInitialized(true);
  //   } 

  // },[])
  

  return (
    <div className="App">
      <Home data={h}/>
    </div>
  );
}

export default App;
