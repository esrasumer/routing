import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Post from './pages/Post'
import Layout from './Layout';
import Users from './Users'
import User from './User';
import Siparis from './pages/Siparis';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:postId" element={<Post />} />
          <Route path="users" element={<Users />} />
          <Route path="user/:id" element={<User />} />
          <Route path="siparislerim" element={<Siparis />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )

};

export default App;
