import React from 'react'
import UseState from './Hooks/UseState'
import UseEffect from './Hooks/UseEffect'
import UseRef from './Hooks/useRef'
import UseMemo from './Hooks/UseMemo'
import Parent from './Hooks/useCallback/Parent'
import Navbar from './Hooks/useContext/Navbar'
import Counter from './Hooks/useReducer/Counter'
import Counterr from './Hooks/Custom Hooks/Counterr'


const App = () => {
  return (
    <div>
      {/* <UseState /> */}
      {/* <UseEffect/> */}
      {/* <UseRef /> */}
      {/* <UseMemo /> */}
      {/* <Parent /> */}
      {/* <Navbar /> */}
      {/* <Counter /> */}
      <Counterr />
    </div>
  )
}

export default App
