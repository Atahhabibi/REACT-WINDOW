import { useSelector } from "react-redux"
import Wrapper from "../assets/wrappers/ChartsContainer"
import { useState } from "react";
import { AreaChart, BarChart } from ".";

const ChartsContainer = () => {

  const {monthlyApplications:data}=useSelector((store)=>store.allJobs);
  
  const [barChart, setBarChart] = useState(true);

  return<Wrapper>
    <h4>Monthly Applications</h4>
    <button type="button" onClick={()=>setBarChart(!barChart)}>{barChart?'bar chart':'area chart'}</button>
    {barChart?<BarChart data={data}/>:<AreaChart data={data}/>}



  </Wrapper>
}

export default ChartsContainer
