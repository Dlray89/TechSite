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
    


}

//     //.fancy {
//   position: relative;
//   background-color: #FFC;
//   padding: 2rem;
//   text-align: center;
//   max-width: 200px;
// }

// .fancy::before {
//   content: "";

//   position : absolute;
//   z-index  : -1;
//   bottom   : 15px;
//   right    : 5px;
//   width    : 50%;
//   top      : 80%;
//   max-width: 200px;

//   box-shadow: 0px 13px 10px black;
// //   transform: rotate(4deg);
// }
    
// }

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
                className='color-change-2x'
            >
                <Link to='/page' onClick={() => this.componentDidMount()}>
                <Transition 
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 1}}
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