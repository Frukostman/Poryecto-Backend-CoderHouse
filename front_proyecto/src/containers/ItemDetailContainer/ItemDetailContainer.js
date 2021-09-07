import ItemDetail from '../../components/ItemDetail/ItemDetail';
import Loading from '../../components/Loading/Loading'

import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  
  const { id } = useParams();

  const [loading, setLoading] = useState(true);                   
  const [item, setItem] = useState({})

  useEffect(() => {
    requestFetch();
  }, [])

  const requestFetch = async () => {
    const response = await fetch("http://localhost:8000/api/products");
    const result = await response.json();

    const item = result.find(e => e._id === id);
    setItem(item)
    setLoading(false)
  }

   
            return(
                      <> 
                      {loading ? <Loading /> : <ItemDetail info={item}/>}
                      </>
              )
}

export default ItemDetailContainer