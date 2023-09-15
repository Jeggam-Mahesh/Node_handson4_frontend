import axios from 'axios'
const RegisterComp=()=>{
    let arr=[];
    const userData={
        name:'',
        phone:'',
        email:'',
        password:''
    }
    const handleChange=(e)=>{
        e.preventDefault(e);
  userData[e.target.name]=e.target.value;
    }
 
    const  submit=(e)=>{ 
        e.preventDefault(e);
        arr.push(userData)
        console.log(userData); 
    axios.post('https://backend-server-handson4.onrender.com/register',userData)
    .then((res)=>alert(res.data.msg)).catch((err)=>console.log(err)) 
    }
    console.log(arr);
    console.log(userData);
    return(
        <>
        <div className="body">
        <header className='header'><h1>Registration Page</h1></header>
        <div className='parent'>
        <div className="reg">
        <div className='reg1'>
            <div className='register'>
            <h1 >Looks like you are  a new user</h1>
            </div>
         
        </div>
        <div className='reg2'>
        <div>
        <input type="text" name='name' placeholder="enter name"  onChange={handleChange}/>
        </div> 
        <div>
        <input type="number" name="phone" placeholder="enter phone number" onChange={handleChange}/>
        </div>
        <div>
        <input type="text" name="email" placeholder="enter email" onChange={handleChange}/>
        </div>
        <div>
        <input type="password" name="password" placeholder="enter password" onChange={handleChange}/>
        </div>
        <div>
        <button className="btn" onClick={submit}>Sign up</button>
        </div>
        <p className='alreadylog'>Already have an account ? Login</p>
        </div>
       
        </div>
        </div>
       
        </div>
  
        </>
    )
}
export default RegisterComp







