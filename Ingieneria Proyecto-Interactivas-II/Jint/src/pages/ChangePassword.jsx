import React, { useState } from 'react'

const ChangePassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleChangePassword = () => {
        if (password === confirmPassword) {
            console.log('Contraseña cambiada a:', password)
        } else {
            console.log('Las contraseñas no coinciden')
        }
    }

    return (
        <section className="flex flex-col justify-center items-center min-h-screen bg-primary p-4">
            <div className="flex flex-col items-center justify-center w-full max-w-md">
                <h2 className="font-bold text-3xl text-center text-white mb-2">
                    Cambio de Contraseña
                </h2>
                <p className="text-center text-white">
                    Ingresa tu nueva contraseña
                </p>

                <form className="mt-4 flex flex-col gap-6 w-full mb-10">
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <input
                            className="w-full"
                            type="password"
                            placeholder="Nueva Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="shadow-main p-2 rounded-xl bg-white flex gap-2">
                        <input
                            className="w-full"
                            type="password"
                            placeholder="Confirmar Contraseña"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="button"
                        className="text-white bg-white/30 rounded-xl w-fit m-auto px-8 py-2 cursor-pointer hover:bg-white hover:text-primary hover:font-semibold"
                        onClick={handleChangePassword}
                    >
                        Cambiar Contraseña
                    </button>
                </form>
            </div>
        </section>
    )
}

export default ChangePassword