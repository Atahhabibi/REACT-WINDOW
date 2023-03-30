import { useState } from "react";
import data from "./data";
import { nanoid } from "nanoid";


const App = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([])

  const handleSubmit=(e)=>{
    e.preventDefault();

    setText(data.slice(0,parseInt(count)));

  }


  return <section className="section-center">

    <h4>tired of boring ipsum?</h4>

    <form className="lorem-form" onSubmit={handleSubmit}>
      <label htmlFor="amount">parapgraphs:</label>
      <input type="number" name="amount" id="amount" min={1} max={8} step="1" value={count} onChange={(e)=>setCount(e.target.value)} />
       <button className="btn" type="submit">generate</button>
    </form>

    <div className="lorem-text">
      {
        text.map((item,index)=>{
          const id=nanoid();
          console.log(id);
          return <p key={id}>{item}</p>
        })
      }
    </div>





  </section>;
};
export default App;
