import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <><h1>📘 Weekly Class Schedule</h1><table>
      <thead>
        <tr>
          <th>DAY</th>
          <th>SUBJECT 1</th>
          <th>SUBJECT 2</th>
          <th>SUBJECT 3</th>
          <th>TIME</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>MONDAY</td>
          <td>DDCA</td>
          <td>JAVA DSA</td>
          <td>FEDFUI</td>
          <td>7:10 AM – 12:50 PM</td>
        </tr>

        <tr>
          <td>TUESDAY</td>
          <td>MATHS</td>
          <td>JAVA DSA</td>
          <td>FEDFUI</td>
          <td>7:10 AM – 12:50 PM</td>
        </tr>

        <tr>
          <td>WEDNESDAY</td>
          <td>ENGLISH</td>
          <td>DDCA</td>
          <td>MATHS</td>
          <td>7:10 AM – 12:50 PM</td>
        </tr>

        <tr>
          <td>THURSDAY</td>
          <td>FEDFUI</td>
          <td>DDCA</td>
          <td>ENGLISH</td>
          <td>7:10 AM – 12:50 PM</td>
        </tr>

        <tr>
          <td>FRIDAY</td>
          <td>JAVA DSA</td>
          <td>DDCA</td>
          <td>ENGLISH</td>
          <td>7:10 AM – 12:50 PM</td>
        </tr>

        <tr>
          <td>SATURDAY</td>
          <td>MATHS</td>
          <td>FEDFUI</td>
          <td>JAVA DSA</td>
          <td>7:10 AM – 12:50 PM</td>
        </tr>
      </tbody>
    </table></>

  )
}

export default App
