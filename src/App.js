import React ,{useState}from 'react'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Home from './Home/Home'
import Product from './Product'
import About from './About/About'
import Productspe  from './productspe'
function App() {

  const [isloggedin,setisloggedin] = useState(false)
  return (
    <div>
      <BrowserRouter>
      <Navbar isloggedin = {isloggedin} setisloggedin = {setisloggedin}  />
<Routes>
  <Route path='/' element ={ isloggedin == true ? <Home/> : <Navigate to = "/"/>}/>
  <Route path='/products' element ={ isloggedin == true ? <Product/> : <Navigate to = "/"/>} />
  <Route path='/products/:productId' element ={ isloggedin == true ? <Productspe/> : <Navigate to = "/"/>} />
  <Route path='/about' element ={ isloggedin == true ? <About/> : <Navigate to = "/"/> }/>
  <Route path= '*' element ={<h1 style={{textAlign :"center"}}>404 PAGE NOT FOUND</h1>}/>
      
    
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App