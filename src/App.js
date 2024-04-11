import React, { useEffect } from 'react';
import './App.css';
import Layout from './layout/MainLayout';
import { Routes, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import HomeLayout from './layout/HomeLayout';
import PrizeLayout from './layout/PrizeLayout';
import Infor from './pages/infor/Infor';
import Contacts from './pages/contact/Contact';
import { ChatTeardropDots } from '@phosphor-icons/react';
import Dowload from './pages/dowload/Dowload';
import Csbm from './pages/csbm/csbm';
import Cstt from './pages/cstt/cstt';

function App() {
  const location = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    scrollToTop();
  }, [location]);
  return (
    <div className='app_container'>
      <Layout>
        <Routes>
          <Route
            path='/'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <HomeLayout />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/infor'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <Infor />
                </CSSTransition>
              </TransitionGroup>
            }
          />

          <Route
            path='/prize'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <PrizeLayout />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/contact'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <Contacts />
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/dowload'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <Dowload/>
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/news'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <HomeLayout/>
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/CSBM'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <Csbm/>
                </CSSTransition>
              </TransitionGroup>
            }
          />
          <Route
            path='/CSTT'
            element={
              <TransitionGroup>
                <CSSTransition classNames="fade" timeout={1000} key={window.location.pathname}>
                  <Cstt/>
                </CSSTransition>
              </TransitionGroup>
            }
          />
        </Routes>
        
      </Layout>

      <div className='call_contact'>
        <div className='contact_icon'>
          <ChatTeardropDots size={30} color={'#333'} />
        </div>
        <div className='contact_title'>Hỗ trợ</div>
      </div>
    </div>
  );
}

export default App;
