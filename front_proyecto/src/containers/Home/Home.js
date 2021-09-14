import ItemList from '../../components/ItemList/ItemList';
import Loading  from "../../components/Loading/Loading";
// import Filters from '../../components/Filters/Filters'

import {useState, useEffect} from 'react'
// import { useParams } from 'react-router-dom'



// import './home.css'


const Home = () => {

  const [loading, setLoading] = useState(true);                   
  const [resultFetch, setResultFetch] = useState({})

  useEffect(() => {
    requestFetch();
  }, [])

  const requestFetch = async () => {
    const response = await fetch("http://localhost:8000/api/products");
    const result = await response.json();

    setResultFetch(result)
    setLoading(false)
  }
    
return (

    <>
        <div className="container-fluid text-center m-1">
          <div className="btn-group">      
            {loading? 
            <Loading/>:
            <ItemList items={resultFetch}/>
            }
          </div>
        </div> 
    </>
    )       
};

export default Home