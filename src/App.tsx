import "./App.css";
import BestPA from "./data";

function App() {
  return (
    <div className="App">

      <div className="overlay">
      <div className="inner">
        <h3 className="title">Best IceBear PA 2024!</h3>
        <ul className="list">
          <li className="item">
            <p className="content">{BestPA[0].timeline}</p>

            <ul className="sub-list">
              {BestPA[0].data.map((PA_info, index) => {
                return (
                  <li key={index} className="sub-item">

                    <p className="sub-item-dev">

                      - {" " + PA_info.dev}

                    </p>

                    <a href={PA_info.path} className="link" target="_blank">
                      - {" " + PA_info.name}
                    </a>


                  </li>
                )
              })}


            </ul>
          </li>
        </ul>
      </div>
      </div>

 
    </div>
  );
}

export default App;