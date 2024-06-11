import { useEffect, useState } from "react";

const Home = (props) => {
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


    return (
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
    );
};

export default Home;