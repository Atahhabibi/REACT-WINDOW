import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {

  const[questions,setQuestions]=useState(data);
  const [activeID, setActiveID] = useState(null);

  const toggleQuestion=(id)=>{

    if(id===activeID){
      setActiveID(null);
      return; 
    }

    setActiveID(id);
  }


 

  return <main>

    <Questions questions={questions} toggleQuestion={toggleQuestion} activeID={activeID} />

  </main>;
};
export default App;
