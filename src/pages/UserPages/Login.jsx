import React from 'react'
import FormLayout from '../../layouts/formLayout'

const Login = () => {
    return (
        <>
            <FormLayout>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl text-center'>Iniciar Sesion</h1>
                    <p className='text-text-secundary text-center'>Accede a nuestra plataforma</p>
                    <label className='font-normal'>Email</label>
                    <Input 
                    placeholder={"Email"}
                    name={"email"}
                    type={"email"}
                    />
                    <label className='font-normal'>Contraseña</label>
                    <Input 
                    placeholder={"Contraseña"}
                    name={"password"}
                    type={"password"}
                    />
                    <p className='text-text-secundary text-sm underline'>Olvidaste tu contraseña?</p>
                    <button className='p-3 bg-action-bg-button text-action-text-button rounded-md font-bold'>Iniciar Sesion</button>
                </div>
            </FormLayout>
        </>
    )
}

function Input({type,name,placeholder}){
    return(
        <input className='border border-border rounded-md p-2' type={type} name={name} placeholder={placeholder}></input>
    )
}

export default Login