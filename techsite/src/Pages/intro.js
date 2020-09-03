import React from 'react'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'


const defaultStyles = {
    overflow: 'hidden',
    width: '80%',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '2em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
    position: 'absolute',
    top: '40%',
    left: '9%',
    borderRadius: '100px',
    boxShadow: '5px 10px red'
    
}

export default class TransitionsExample extends React.PureComponent {
    state = { items: [] }


    async componentDidMount() {
        this.t1 && clearTimeout(this.t1)
        this.t2 && clearTimeout(this.t2)
        this.t3 && clearTimeout(this.t3)

        this.setState({ items: ['Welcome World'] })
        this.t1 = setTimeout(
            () => this.setState({ items: ['Hi, My name is DAVE'] }),
            3500
        )
        this.t2 = setTimeout(
            () => this.setState({ items: ['Are you ready to explore?'] }),
            7000
        )
        this.t3 = setTimeout(() => this.setState({ items: ['Lets GO'] }), 10500)
    }

    render() {

        return (
            <div
                style={{
                    background: 'linear-gradient(to left, #232526, #414345)',
                    overflow: 'hidden',        
                    margin: 0,
                    padding: 0,
                    border:'solid 1px black',
                    height: '100vh',
                    
                }}
            >
                <Link to='/page' onClick={() => this.componentDidMount()}>
                <Transition 
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 0 }}
                    enter={{ height: 50, opacity: 1, background: '#28d79f' }}
                    leave={{ height: 0, opacity: 0, background: '#c23369' }}
                    update={{ background: '#28b4d7' }}
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