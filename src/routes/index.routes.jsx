import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// Contexts
import Data from '../contexts/Data';

// Components
import Loading from '../components/Loading';

// Pages
import Main from '../pages/Main';

const Timeline = lazy(() => import('../pages/Timeline'));

const Routes = () => (
    <BrowserRouter>
        <Suspense fallback={<Loading />}>
            <Data>
                <Switch>
                    <Route path="/" exact component={Main} />
                    <Route path="/timeline" exact component={Timeline} />
                    <Route path="*">
                        <Redirect to="/" />
                    </Route>
                </Switch>
            </Data>
        </Suspense>
    </BrowserRouter>
);

export default Routes;
