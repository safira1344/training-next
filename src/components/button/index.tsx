'use client'

import { useState } from "react"

export function Button() {
    const [nome, setNome] = useState('Programadora')

    function handleChangeName() {
        setNome('Fernanda Mirely')
    }


    return (
        <div>
            <button onClick={handleChangeName}>Alterar nome</button>
            <h3>Nome: {nome}</h3>
        </div>
    )
}