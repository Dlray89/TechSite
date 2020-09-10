import React from 'react'
import { Link } from 'react-router-dom'
import { Transition, animated } from 'react-spring/renderprops'
import css from './intro.css'


const defaultStyles = {
    overflow: 'hidden',
    width: '50%',
    color: 'red',//
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',//
    fontSize: '2em',
    fontFamily: "'Kanit', sans-serif",
    textTransform: 'uppercase',
    position: 'absolute',
    top: '40%',
    left: '10%',
    boxShadow: '1px 1px 30px red'
    


}


export default class TransitionsExample extends React.PureComponent {
    state = { items: [] }


    async componentDidMount() {
        this.t1 && clearTimeout(this.t1)
        this.t2 && clearTimeout(this.t2)
        this.t3 && clearTimeout(this.t3)

        this.setState({ items: ['Welcome World'] })
        this.t1 = setTimeout(
            () => this.setState({ items: ['Hi, im Dave! I am a full stack-developer'] }),
            3500
        )
        this.t2 = setTimeout(
            () => this.setState({ items: ['Ready to make your vision come true.'] }),
            7000
        )
        this.t3 = setTimeout(() => this.setState({ items: ['Tap here to get started'] }), 10500)
    }

    render() {

        return (
            <div
                
            >
                <Link to='/welcome' onClick={() => this.componentDidMount()}>
                <Transition 
                    items={this.state.items}
                    //initial={null}
                    from={{ overflow: 'hidden', height: 0, opacity: 0}}
                    enter={{ width:'70%' ,height: 75, opacity: 1, background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)', background:"linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)", color:'black', border:'solid 1px black ' }}                   leave={{ height: 0, opacity: 0, background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)' }}
                    update={{ background: 'linear-gradient(to right, #ada996, #f2f2f2, #dbdbdb, #eaeaea)', color:'black', border:'solid 1px #660708' }}
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