import React from 'react'
import {Switch, Route} from 'react-router-dom';

import Beranda from './beranda'
import TentangCovid from './tentangcovid';
import Data from './data';
import Facts from './facts';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route exact path="/TentangCovid" component={TentangCovid} />
        <Route exact path="/Data" component={Data} />
        <Route exact path="/Facts" component={Facts} />
    </Switch>
)

export default Utama;