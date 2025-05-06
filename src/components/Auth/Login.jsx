import React, { useState } from 'react';

function Login({handleLogin}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const submitHandler = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        handleLogin(email, password);
        // console.log("email", email);
        // console.log("password", password);

        setEmail('');
        setPassword('');
    }



    return (
        <>
        <div className='flex h-screen w-screen items-center justify-center'>
            <div className='border-2 rounded border-emerald-600 p-20'>
                <form 
                onSubmit={(e) =>{ submitHandler(e)}}
                className="flex flex-col items-center justify-center ">
                    <input
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required className=" ourline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-4 placeholder:text-gray" type="email" placeholder="Enter your email"/>
                    <input 
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required className=" ourline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-4 mt-5 placeholder:text-gray" type="password" placeholder="Enter the password" />
                    <button className='text-white ourline-none border-none  bg-emerald-600 rounded-full text-xl py-3 px-4 mt-5 placeholder:text-white'>Login in</button>
                </form>
            </div>

        </div>
        </>
    );

}

export default Login;