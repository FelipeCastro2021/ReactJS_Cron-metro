/* ======================= TODO React State ======================= */
// import React, { useState } from 'react'

// export default function App() {
//   // Declare uma nova variável de state, a qual chamaremos de "count"

//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('Felipe')
//   const [numeros, setarNumeros] = useState([1, 2, 3])

//   return (
//     <div>
//       <p>{name}</p>
//       <button onClick={() => setName(name + ' Castro')}>Click me</button>
//     </div>
//   )
// }

/* ======================= TODO React Effect ======================= */
// import React, { useState, useEffect } from 'react'

// export default function Appp() {
//   const [count, setCount] = useState(0)
//   const [name, setName] = useState('Felipe Castro')
//   const [age, setAge] = useState(19)

//   // Similar ao componentDidMount e componentDidUpdate:
//   useEffect(() => {
//     // Atualiza o titulo do documento usando a API do browser
//     document.title = `Você clicou ${count} vezes`
//   }, [count])

//   if (name == 'Felipe Castro') {
//     return (
//       <div>
//         <p>Oi, Felipe pode usar o contador!</p>
//         <p>Você clicou {count} vezes</p>
//         <button onClick={() => setCount(count + 1)}>Clique aqui</button>

//         {age == 19 ? (
//           <div>
//             <p>Felipe, você é maior de idade.</p>
//           </div>
//         ) : (
//           <div>
//             <p>Felipe, você é menor de idade.</p>
//           </div>
//         )}
//       </div>
//     )
//   } else {
//     return (
//       <div>
//         <p>Eu preciso do nome Felipe</p>
//       </div>
//     )
//   }
// }

/* =================================== RELÓGIO ================================== */
import React, { useState, useEffect } from 'react'

export default function Appp() {
  const [hora, setHora] = useState(13)
  const [minutos, setMinutos] = useState(58)
  const [segundos, setSegundos] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setSegundos(segundos + 1)

      if (segundos == 59) {
        setSegundos(0)
        setMinutos(minutos + 1)
      }

      if (minutos == 59) {
        setMinutos(0)
        setHora(hora + 1)
      }
    }, 1000)

    return () => clearInterval(interval)
  })

  return (
    <div>
      <p>
        {hora}:{minutos}:{segundos}
      </p>
    </div>
  )
}
