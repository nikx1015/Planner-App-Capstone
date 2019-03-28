import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import Planner from './components/Planner'

import './index.css'

ReactDOM.render(
    <Router>
        <Planner />
    </Router>
    , document.getElementById('root'))