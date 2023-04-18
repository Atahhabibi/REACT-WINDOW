import PhotosContainer from "./PhotosContainer";
import { useAppContext } from "./appContext";
import Error from "./utils/Error";
import Loading from "./utils/Loading";


function App() {

  const {isError,isLoading,theme}=useAppContext();

  if(isLoading){
    return <Loading />
  }

  if(isError){
    return <Error />
  }


  return <main style={theme?{background:'black'}:{background:'var(--primary-300)'}}>

    <div className="section-center">

      <PhotosContainer/>

    </div>


  </main>
}

export default App
