
import { useEffect, useState } from 'react'
import MiFormulario from './Components/Form'
import MiCard from './Components/Card'

function App() {
  let [peliculas,setPeliculas] = useState([] || JSON.parse(localStorage.getItem('peliculas')))

  return (
    <>
      <h1 className="w-full flex justify-center">Alta peliculas</h1>
      <MiFormulario peliculas={peliculas} setPeliculas={setPeliculas}></MiFormulario>
      <hr />
      <MiCard peliculas={peliculas}></MiCard>
    </>
  )
}

export default App
