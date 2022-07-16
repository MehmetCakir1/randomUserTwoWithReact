import Person from "./components/Person";
import Footer from "./components/footer/Footer";
import axios from "axios"
import { useEffect,useState } from "react";
import cwSvg from "./assets/cw.svg";


const url = "https://randomuser.me/api/";
const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [people,setPeople]=useState([])
  const [loading,setLoading]=useState(false)


  const getData = async()=>{
    try{
      const {data}=await axios.get(url)
      // console.log(data);
      setPeople(data.results)
      setLoading(true)
    }
    catch(error){
      console.log(error);
    }
  }
  console.log(people);
  // console.log(people[0].name);
  useEffect(() => {
    getData()

  }, [])

  if(!loading){
    return(
      <h1 className="loading">Loading...</h1>
    )
  }else{
    // console.log(people);
  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <Person people={people} getData={getData} defaultImage={defaultImage}/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Footer />
      </div>
    </main>
  );
  }
}

export default App;
