import RegisterComp from './RegisterComp'
import LoginComp from './LoginComp'
import { Route,Routes,BrowserRouter } from 'react-router-dom'
import Home from './Home'
const RouteComp=()=>{
    return(
        <div>
            <BrowserRouter>
            <Routes>
            <Route path='/' element={<Home/>}/>
           <Route path='/register' element={<RegisterComp/>}/>
          <Route path='/login' element={<LoginComp/>}/>
            </Routes>
            </BrowserRouter>
        </div>

    )
}
export default RouteComp