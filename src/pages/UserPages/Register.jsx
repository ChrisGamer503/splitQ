import FormLayout from '../../layouts/formLayout'

const Register = () => {
    return (
        <>
            <FormLayout>
                <div className='mx-auto my-auto mb-5'>
                    <h1 className='font-bold text-2xl ml-10'>Crear Cuenta</h1>
                    <p className='text-gray-400'>Crea una nueva cuenta en SplitQ</p>
                </div>

                <label>Nombre</label>
                <Inpvts placeholder={"Nombre"} type={"text"}/>
                <label>Apellido</label>
                <Inpvts placeholder={"Apellido"} type={"text"}/>
                <label>Email</label>
                <Inpvts placeholder={"Email"} type={"email"}/>
                <label>Contraseña</label>
                <Inpvts placeholder={"Contraseña"} type={"Password"}/>
                <button className='border border-gray-200 p-2 mt-5 rounded-md text-white bg-black'>Crear Cuenta</button>
            </FormLayout>

        </>
        
    )
    function Inpvts({placeholder, type}){

        return(<input placeholder={placeholder} type={type} className='border border-gray-200 p-2 mb-2 mt-1 rounded-md'/>);


    }
}

export default Register