import React,{useState}from 'react'

//const form = () => {
function form(){  
  const [email, setEmail] = useState ("");
  const [password, setPassword] = useState ("");
  const [entry, setEntry] = useState ([]);

  const submitForm = (e) =>{
     e.preventDefault();
  
  
   if (email && password) {
    const newEntry = { id: new Date().getTime().toString(), email,
      password};

   setEntry ([...entry, newEntry]);
   console.log(entry);

   setEmail("");
   setPassword("");
   }
   else {
    alert("Please fill Email and Password")
   }
   
  }

  return ( 
    <>
    <form action='' onSubmit={submitForm}>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' autoComplete='off' value={email} 
             onChange = {(e) => setEmail(e.target.value)} />
        </div>

        <div>
            <label htmlFor='password'>Password</label>
            <input type="password" name='password' id='password' autoComplete='off' value={password} 
            onChange = {(e) => setPassword(e.target.value)} />
        
        </div>

        <button type='submit'>Login</button>
        
        
        </form>


      <div>
          {
            entry.map((curElem) =>{
              const { id , email , password } = curElem;
            return (
               <div key= {id} >
                <p>{email}</p>
                <p>{password}</p>
               </div>
            ) 
            })
          }         

      </div>
    </>
  )
}

export default form