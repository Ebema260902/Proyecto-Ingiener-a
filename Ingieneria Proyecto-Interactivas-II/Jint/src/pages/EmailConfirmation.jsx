import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const EmailConfirmation = () => {
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [isCodeSent, setIsCodeSent] = useState(false)
    const navigate = useNavigate()

    const handleSendCode = () => {
        console.log('Código enviado al email:', email)
        setIsCodeSent(true)
    }

    const handleVerifyCode = () => {
        console.log('Código ingresado:', code)
        navigate('/changepassword')
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-primary p-4">
            <div className="flex flex-col items-center justify-center w-full max-w-md">
                <h2 className="font-bold text-3xl text-center text-white mb-2">
                    Confirmación de Email
                </h2>
                <p className="text-center text-white">
                    Ingresa tu email para recibir un código de verificación
                </p>

                <form className="mt-4 flex flex-col gap-6 w-full mb-10">
                    {!isCodeSent ? (
                        <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                            <input
                                className="w-full"
                                type="email"
                                placeholder="Ingresa tu email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    ) : (
                        <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                            <input
                                className="w-full"
                                type="text"
                                placeholder="Ingresa el código recibido"
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                            />
                        </div>
                    )}

                    {!isCodeSent ? (
                        <button
                            type="button"
                            className="text-white bg-white/30 rounded-xl w-fit m-auto px-8 py-2 cursor-pointer hover:bg-white hover:text-primary hover:font-semibold"
                            onClick={handleSendCode}
                        >
                            Enviar Código
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="text-white bg-white/30 rounded-xl w-fit m-auto px-8 py-2 cursor-pointer hover:bg-white hover:text-primary hover:font-semibold"
                            onClick={handleVerifyCode}
                        >
                            Verificar Código
                        </button>
                    )}
                </form>
            </div>
        </section>
    )
}

export default EmailConfirmation
