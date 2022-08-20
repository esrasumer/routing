import {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("blog"); //navigate("blog", {replace:true}); geriye gitmek yerine sayfayı yeniler 
        },3000)
    },[navigate]
    );

    return(
        <div>
            <h1>Home</h1>
            You will be redirected to tha blog in 3 seconds...
        </div>
    );
};

export default Home;