import axios from 'axios'
import { useState, useEffect } from 'react'

const FetchingDataComponent = () => {

  const [persons, setPersons] = useState([])

  useEffect(() => {
    console.log('fetching data...')

    axios
      .get('http://localhost:3001/api/persons')
      .then(response => {
        console.log(response.data)
        setPersons(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
      })

  }, [])

  return (
    <ul className='listStyle'>
      {persons.map(person => (
        <li key={person.id}>
          <p>ID: {person.id}</p>
          <p>Name: {person.name}</p>
          <p>Number: {person.number}</p>
        </li>
      ))}
    </ul>
  )
}

export default FetchingDataComponent
