import React from 'react'
import FormLayout from '../../layouts/formLayout'

const Login = () => {
    return (
        <>
            <FormLayout>
                <h1 className='font-bold text-2xl'>Iniciar Sesion</h1>
                <p>Accede a nuestra plataforma</p>
                <label>email</label>
                <input placeholder='email' />
                <label>Contraseña</label>
                <input placeholder='Contraseña' />
                <p>Olvidaste tu contraseña?</p>
                <button>Iniciar Sesion</button>
            </FormLayout>
        </>
    )
}

export default Login