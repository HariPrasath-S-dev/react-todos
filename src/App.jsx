import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// If we are using export command in a separate line
// import TodoRowItem from './components/TodoRowItem'

import {TodoRowItem} from './components/TodoRowItem'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='full-table'>
      <div>
        <div>
          Your Todo's
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Description</th>
                <th>Assigned</th>
              </tr>
            </thead>
            <tbody>
             <TodoRowItem/>
              <tr>
                <td>2</td>
                <td>Learn Vite</td>
                <td>Me</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default App
