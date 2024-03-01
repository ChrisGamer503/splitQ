import React from "react";
import FormLayout from '../../layouts/formLayout'
import { MdOutlineWarningAmber } from "react-icons/md";

const VerificarCuenta = () => {
    return (
        <>
            <FormLayout>
                <div className='flex flex-col gap-4'>
                    <h1 className='font-bold text-2xl text-center'>Verifica tu cuenta</h1>
                    <p className='text-text-secundary text-center'>En tu correo se ha enviado un codigo de verificación!</p>
                    <label>Codigo de verificación</label>
                    <div className="flex justify-center items-center bg-yellow-bg-notification border border-yellow-border-notification rounded-md p-2">
                    <MdOutlineWarningAmber className="text-yellow-text-notification font-bold text-3xl"/>
                    <div className="ml-3">
                        <p className="font-bold">Advertencia!</p>
                        <p className="text-xs">Necesitaras datos moviles o conexion a internet</p>
                    </div>
                    </div>
                    <Input
                        placeholder={"Codigo"}
                        type={"text"}
                        name={"codigo"}
                    />
                    <button className='p-3 bg-action-bg-button text-action-text-button rounded-md font-bold'>Verificar Cuenta</button>
                </div>
            </FormLayout>
        </>
    )
}

function Input({ type, name, placeholder }) {
    return (
        <input className='border border-border rounded-md p-2' type={type} name={name} placeholder={placeholder}></input>
    )
}

export default VerificarCuenta