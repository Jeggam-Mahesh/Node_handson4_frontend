import {  Link } from "react-router-dom"
// import RegisterComp from "./RegisterComp"
const Home=()=>{
    return(
        <div className='body'>
            <header className='header'><h1>Home Page</h1></header>
            <div className="parent">
            <div className="home_container">
                <div className='exampl'>
                    <div>
                    <h2>welcome to the website</h2>
                    <h3>If you are a new user Please</h3>
                    <p>
                    <b> signup</b>
                    </p>
                    <h3>Already a user Please <b>Login</b></h3>
                    </div>
                  
                </div>
                <div className='exp2'>
                   <div>
                    <h2>New User</h2>
                   <button>< Link to='/register'>Signup</ Link></button>
                   <h2>Already a user</h2>
                    <button>< Link to='/login'>login</ Link></button>
                   </div>
                </div>
            </div>
            </div>
            
        </div>
    )
}
export default Home