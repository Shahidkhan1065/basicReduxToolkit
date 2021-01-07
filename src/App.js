import React, { Suspense, lazy } from 'react';
import { Switch, Router, Route, Link } from 'react-router-dom';
const Step1 = lazy(() => import('./Step1'));
const Step2 = lazy(() => import('./Step2'));
const Step3 = lazy(() => import('./Step3'));
const Step4 = lazy(() => import('./Step4'));
const Result = lazy(() => import('./Result'));
// const Profile = lazy(() => import('./Profile'));
// const About = lazy(() => import('./About'));

function App() {
  return (
    <>
      <Suspense fallback={<p>...Loading</p>}>
        <Switch>
          <Route exact path='/' component={Step1} />
          <Route path='/step2' component={Step2} />
          <Route path='/step3' component={Step3} />
          <Route path='/step4' component={Step4} />
          <Route path='/result' component={Result} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
