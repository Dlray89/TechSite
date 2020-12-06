import React from "react"
import { useSpring, animated} from 'react-spring'
import Intro_Transition from '../intro'
import './introBG.css'

export default function App() {
  const props = useSpring({
    from: { left: '0%', top: '0%', width: '0%', height: '100vh', background: 'lightgreen' },
    to: async next => {
      while (1) {
        await next({ left: '0%', top: '0%', width: '100%', height: '100%', background: '#f8f9fa' })
        await next({ height: '50%', background: '#e9ecef' })
        await next({ width: '50%', left: '50%', background: '#dee2e6' })

        await next({ top: '0%', height: '100%', background: '#ced4da' })
        await next({ top: '50%', height: '50%', background: '#adb5bd' })
        await next({ width: '100%', left: '0%', background: '#6c757d' })
        await next({ width: '50%', background: '#495057' })
        await next({ top: '0%', height: '100%', background: '#343a40' })
        await next({ width: '100%', background: '#212529' })
      }
    },
  })
  return(
      <div>
<animated.div className="script-box" style={props}/>
<Intro_Transition />
      </div>

  )  

     
  
}