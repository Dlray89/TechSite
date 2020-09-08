import React from 'react'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'
import css from './intro.css'


const defaultStyles = {
    overflow: 'hidden',
    width: '50%',
    color: 'white',//
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',//
    fontSize: '2em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
    position: 'absolute',
    top: '40%',
    left: '10%',
    boxShadow: '1px 1px 30px white'
    


}


export default class TransitionsExample extends React.PureComponent {
    state = { items: [] }


    async componentDidMount() {
        this.t1 && clearTimeout(this.t1)
        this.t2 && clearTimeout(this.t2)
        this.t3 && clearTimeout(this.t3)

        this.setState({ items: ['Welcome World'] })
        this.t1 = setTimeout(
            () => this.setState({ items: ['My name is DAVE'] }),
            3500
        )
        this.t2 = setTimeout(
            () => this.setState({ items: ['I am a software developer'] }),
            7000
        )
        this.t3 = setTimeout(() => this.setState({ items: ['Continue....'] }), 10500)
    }

    render() {

        return (
            <div
                className='color-change-2x'
            >
                <Link to='/welcome' onClick={() => this.componentDidMount()}>
                <Transition 
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 0}}
                    enter={{ height: 50, opacity: 1, background: '#28d79f', background:"#F2F2F2", color:'black' }}                   leave={{ height: 0, opacity: 0, background: '#24243e' }}
                    update={{ background: '#24243e', color:'white', border:'solid 1px white' }}
                    trail={200}>
                 {item => styles => (
                        <animated.div style={{ ...defaultStyles, ...styles }}>
                            {item}

                            
                        </animated.div>
                    )}
                    </Transition>
               
                    </Link>
                
            </div>
        )
    }
}