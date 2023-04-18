import axios from "axios"
import { useEffect, useState } from "react"


const useFetch = (url) => { //evitar ciclo infimito
    const [state, setState] = useState() //guardar informacion que viene de la API

    const [hasError, setHasError] = useState(false)
    useEffect(() => {  //Ejecute informacion

        axios.get(url)
            .then(res => {
                setState(res.data)
                setHasError(false)

            })//es exitosa,  se guarda en el estado
            .catch(err => {
                console.log(err)
                setHasError(true)
            })//hay fallos

    }, [url])
    return [state, hasError]
}
export default useFetch 