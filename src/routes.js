import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './components/Main/index';
import Repository from './components/Repository/Repository';

function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/repository" component={Repository} />
            </Switch>
        </BrowserRouter>
    );
}

export default Router;
