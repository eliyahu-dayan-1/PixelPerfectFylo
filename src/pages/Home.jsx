import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { login, getUser } from '../store/actions/userActions.js'
import { Sec1 } from '../cmps/Sec1.jsx'
import { Sec2 } from '../cmps/Sec2.jsx'
import { Sec3 } from '../cmps/Sec3.jsx'
import { Sec4 } from '../cmps/Sec4.jsx'
import { Sec5 } from '../cmps/Sec5.jsx'

class Home extends React.Component {

    render() {

        return (
            <>
                <Sec1/>
                <Sec2/>
                <Sec3/>
                <Sec4/>
                <Sec5/>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = {

}
export default connect(mapStateToProps, mapDispatchToProps)(Home)