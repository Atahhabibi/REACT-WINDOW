import { useState ,useEffect} from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {

  const[isLoading,setIsLoading]=useState(true);
  const[tours,setTours]=useState([]);

  const removeTour=(id)=>{
    const newTours=tours.filter((tour)=>tour.id!==id);
    setTours(newTours)

  }




  const fetchTours=async()=>{
    setIsLoading(true);
    try {
      const response=await fetch(url);

      if(!response.ok){
        setIsLoading(false);
        return;
      }

      const tours=await response.json();
      setIsLoading(false);
      setTours(tours);


    } catch (error) {
      console.log(error.message);
      setIsLoading(false);
      
    }

  };


 useEffect(() => {

  fetchTours();

  }, [])

  if(isLoading){
    return <main> <Loading/> </main>
  }

  if(tours.length<1){
    return <main>

      <div className="title">

      <h2>No tours left</h2>
      <button type="button" className="btn" onClick={fetchTours} style={{marginTop:'2rem'}}>refresh</button>

      </div>



    </main>
  }


  return <main>

     <Tours tours={tours} removeTour={removeTour} />
  </main>;
};
export default App;
