import FormLayout from '../../layouts/formLayout'

const Register = () => {
    return (
        <>
            <FormLayout>
                <h1 className='font-bold text-2xl justify-center'>Crear Cuenta</h1>
                <p>Accede a nuestra plataforma</p>
                <label>Nombre</label>
                <input placeholder='Nombre' />
                <label>Apellido</label>
                <input placeholder='Apellidos' />
                <label>Email</label>
                <input placeholder='Email' />
                <label>Contraseña</label>
                <input placeholder='Contraseña' />
                <p>Olvidaste tu contraseña?</p>
                <button>Crear Cuenta</button>
            </FormLayout>
        </>
    )
}

export default Register