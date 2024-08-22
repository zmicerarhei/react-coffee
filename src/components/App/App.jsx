import { useLocation } from 'react-router-dom';
import { useOutlet } from 'react-router-dom';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { Suspense, useEffect } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Preloader from '../Preloader/Preloader';

import { routes } from '../../routes/routes';

import './App.css';

const App = () => {
  const location = useLocation();
  const currentOutlet = useOutlet();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const { nodeRef } = routes.find(route => route.path === location.pathname) ?? {};

  return (
    <div className="app">
      <Suspense fallback={<Preloader />}>
        <Header />
        <SwitchTransition>
          <CSSTransition key={location.pathname} nodeRef={nodeRef} timeout={300} classNames="page" unmountOnExit>
            {() => (
              <div ref={nodeRef} className="page">
                {currentOutlet}
              </div>
            )}
          </CSSTransition>
        </SwitchTransition>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;
