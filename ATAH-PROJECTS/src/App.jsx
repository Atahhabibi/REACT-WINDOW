import useAxios from "./utils/useAxios";
const mainUrl = `/photos`
const searchUrl = `/search/photos/`

function App() {

  const {data,isLoading,isError}=useAxios(mainUrl);


  if(isLoading){
    
  }



  






  return <div>
    <h1>App Components</h1>
  </div>
}

export default App
