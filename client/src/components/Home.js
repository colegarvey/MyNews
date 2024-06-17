import { useEffect, useState } from "react";

const Home = (data) => {
    // var [s1,setS1] = useState(false);
    // var [s2,setS2] = useState(false);
    // var [s3,setS3] = useState(false);
    // var [s4,setS4] = useState(false);
  
    // useEffect(() => {
     
    //   console.log("s1",s1);
    //   console.log("s2",s2);
    //   console.log("s3",s3);
    //   console.log("s4",s4);
      
    // }, [s1,s2,s3,s4])

    // const sourceList = [<li>{data.sources}</li>];
    // for (let i=0; i < data.length; i++) {
        // sourceList.push(<li>{data.sources}</li>);
    // }



    return (
        <div>
            <li>{data.sources}</li>
        </div>
    );
};

export default Home;
 