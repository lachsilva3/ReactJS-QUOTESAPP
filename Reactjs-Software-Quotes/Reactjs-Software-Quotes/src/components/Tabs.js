import { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Authors from "./Authors";
import Quotes from "./Quotes";
import Home from "./Home";
import PostForm from "./PostForm"
import "./tab.css";

function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="titlebar">
      <h1 class="heading">Software Quotes</h1>
      <div className="cbox">
        
        <div className="bloc-tabs">
          <button
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Home
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Author
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Quotes
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Add new quote
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={toggleState === 1 ? "content  active-content" : "content"}
          >
            <center><h3>Quote of the week</h3></center>
            <Routes>
              <Route path="/" element={<Home/>} />
            </Routes>
            
            
          </div>

          <div
            className={toggleState === 2 ? "content  active-content" : "content"}
          >
            <Routes>
              <Route path="/" element={<Authors
                click={() => toggleTab(3)
                }

              />} />
            </Routes>
          </div>

          <div
            className={toggleState === 3 ? "content  active-content" : "content"}
          >
            <Routes>
              <Route path="/" element={<Quotes />} />
            </Routes>
          </div>

          <div
            className={toggleState === 4 ? "content  active-content" : "content"}
          >
            
            <Routes>
              <Route path="/" element={<PostForm/>} />
            </Routes>
            
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;