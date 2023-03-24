const url = 'https://course-api.com/react-tabs-project';
import { useState ,useEffect } from "react";
import ButtonContainer from "./ButtonContainer";
import JobInfo from "./JobInfo";

const App = () => {

  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [currentItem, setCurrentItem] = useState(0)

  const fetchJobs=async()=>{

    setIsLoading(true);

    try {
      const response=await fetch(url);
      if(!response.ok){
        setIsLoading(false);
        return; 
      }

      const results= await response.json();
      setJobs(results);
      setIsLoading(false);
      
    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      
    }

  }

  useEffect(() => {
    fetchJobs();
  }, []);

  
  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }

  return <section className="jobs-center">


    <ButtonContainer jobs={jobs} setCurrentItem={setCurrentItem} currentItem={currentItem}/>

    <JobInfo jobs={jobs} currentItem={currentItem}/>

  </section>;
};
export default App;
