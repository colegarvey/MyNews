import './App.css';

/*
line the top with clickable input boxes by news source and useState to keep track of clicked value
have useEffect to all varialbe boxes to known when another is clicked, would call API again to get refreshed content
useEffect(() ..
  call to refresh content
,[input boxes values])

make functions to call and change the state of the input boxes
*/

function App() {
  return (
    <div className="App">

      <div className="horizontal-flex">

        <div className="verticle-flex">
          <label className="label-position">Source</label>
          <input type="checkbox"/>
        </div>

        <div className="verticle-flex">
          <label className="label-position">Source</label>
          <input type="checkbox"/>
        </div>

        <div className="verticle-flex">
          <label className="label-position">Source</label>
          <input type="checkbox"/>
        </div>

        <div className="verticle-flex">
          <label className="label-position">Source</label>
          <input type="checkbox"/>
        </div>

      </div>
      
    </div>
  );
}

export default App;
