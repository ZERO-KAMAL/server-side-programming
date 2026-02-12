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
        <>

            <ul className='listStyle'>
                {persons.map((person, i) => (
                    <li key={i} >
                        <p>{person.id}</p>
                        <p>{person.content}</p>
                        <p>{person.important}</p>
                    </li>
                ))}
            </ul>
        </>
    )

}



export default FetchingDataComponent