import './App.css';
import init_Headlines from './helpers/initHeadlines';
import { useEffect, useState } from "react";

/*
line the top with clickable input boxes by news source and useState to keep track of clicked value
have useEffect to all variable boxes to known when another is clicked, would call API again to get refreshed content
useEffect(() ..
  call to refresh content
,[input boxes values])

make functions to call and change the state of the input boxes
*/

function App() {
  var [s1,setS1] = useState(false);
  var [s2,setS2] = useState(false);
  var [s3,setS3] = useState(false);
  var [s4,setS4] = useState(false);

  useEffect(() => {
   
    console.log("s1",s1);
    console.log("s2",s2);
    console.log("s3",s3);
    console.log("s4",s4);
    
  }, [s1,s2,s3,s4])

  const headlines = init_Headlines();
  console.log(headlines);
  return (
    <div className="App">

      <section className='sources-list'>
        <div className="sources-grid">

          <div className="v-flex ns-all ns-1">
            <label className="label-position">Source1</label>
            <input id="SOURCE1" type="checkbox" 
            onClick={() => {
                setS1(!s1);
              }
            }/>
          </div>

          <div className="v-flex ns-all ns-2">
            <label className="label-position">Source2</label>
            <input id="SOURCE2" type="checkbox"
            onClick={() => {
                setS2(!s2);
              }
            }/>
          </div>

          <div className="v-flex ns-all ns-3">
            <label className="label-position">Source3</label>
            <input id="SOURCE3" type="checkbox"
            onClick={() => {
                setS3(!s3);
              }
            }/>
          </div>

          <div className="v-flex ns-all ns-4">
            <label className="label-position">Source4</label>
            <input id="SOURCE4" type="checkbox"
            onClick={() => {
                setS4(!s4);
              }
            }/>
          </div>



        </div>
      </section>


      
    </div>
  );
}

export default App;
