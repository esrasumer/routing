import { useEffect } from 'react';
import { useParams } from 'react-router-dom'

function Post() {
  // useParams
  const params = useParams();
      console.log(params);
      //useEffect
  useEffect(() => {
    console.log(params);
  },[params.postId])

  return (
    <h1>Post (#{params.postId})</h1>
  )
}

export default Post;