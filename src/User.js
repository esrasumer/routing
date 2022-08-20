import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function User() {

const [user,setUser] = useState({});

const { id } = useParams();

useEffect(() => {
axios(`https://jsonplaceholder.typicode.com/users/1 ${id}`).then((res) => setUser(res.data))
},[])
  // useParams
//  const params = useParams();
     // console.log(params);
      //useEffect
  // useEffect(() => {
  //   console.log(params);
  // },[params.postId])

  return (
    <div>
    <h1>User (#{id})</h1>
    </div>
  )
}

export default User;