import React from 'react'
import InputBox from './InputBox'
import { Link } from 'react-router-dom'
import Button from './Button'


function Login() {
    return (
        <div className="bg-slider-2 bg-cover bg-center bg-blend-darken bg-black/40 justify-items-center font-quicksand py-20">
            <div className="bg-body-color w-4/5 justify-items-center pb-20">
                <h1 className="text-6xl font-lobster pt-20 text-baker-orange">Login</h1>
                <InputBox label="Username" type="text" placeholder="Type your username or email" svg={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(255, 94, 0)" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>} />
                <InputBox label="Password" type="password" placeholder="Type your password" svg={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="rgb(255, 94, 0)" class="bi bi-lock" viewBox="0 0 16 16">
                    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M5 8h6a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1" />
                </svg>} />
                <div className="w-3/5">
                    <Link className="float-right text-gray-400">Frogot password?</Link>
                    <br />
                </div>
                <div className="justify-center">
                    <Button name='Login' />
                </div>
                <div className="py-10">
                    <h1 className="text-baker-yellow font-semibold">or Continue with</h1>
                    <div className="flex flex-row justify-evenly pt-5 pb-10">
                        <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#F4B411" class="bi bi-google" viewBox="0 0 16 16">
                                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
                            </svg>
                        </Link>
                        <Link>
                            <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#F4B411" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </Link>
                    </div>
                    <div className="justify-items-center">
                        <h1 className="text-baker-yellow font-semibold">or Sign up using</h1>
                        <Link to='/signup' className="font-bold text-xl text-baker-orange">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login