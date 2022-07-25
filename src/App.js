import React, { lazy, Suspense, useRef } from 'react';
import { motion, useScroll } from "framer-motion";
import './App.css';

import Principal from './components/Principal';
const About = lazy(() => import('./components/About'));
const Nave = lazy(() => import('./components/Nave'));
const Time = lazy(() => import('./components/Time'));
const Faq = lazy(() => import('./components/Faq'));

function App() {
  const { scrollYProgress } = useScroll();
  const about = useRef(null);
  const nativeNave = useRef(null);
  const time = useRef(null);
  const faq = useRef(null);

  const scrollToBottom = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
        <Principal scrollToBottom={scrollToBottom} about={about} nativeNave={nativeNave} time={time} faq={faq} />
        <About about={about} />
        <Nave nativeNave={nativeNave} />
        <Time time={time} />
        <Faq faq={faq} />
      </Suspense>
    </>
  );
}

export default App;
