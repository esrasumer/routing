import { useEffect,useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

function User() {

const [user,setUser] = useState({});
const [loading,setLoading] = useState(true);

const { id } = useParams();

useEffect(() => {
axios(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res) => setUser(res.data))
.finally(() => setLoading(false));
},[id])
  // useParams
//  const params = useParams();
     // console.log(params);
      //useEffect
  // useEffect(() => {
  //   console.log(params);
  // },[params.postId])
console.log('isa');
  return (
    <div>
    <h1>User Detail</h1>
    {loading && <div>Loading...</div>}
    <code>{JSON.stringify(user)}</code>
    <br />
    <br />
    <Link to={`/user/${parseInt(id)+1}`}>Next User</Link>
    </div>
  )
}

export default User;