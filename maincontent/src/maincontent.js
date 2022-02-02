import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
import styles from './maincontent.module.scss';

export default function  maincontent(){
  
  
      return ( 
          <>
          </>
       );
  }
  
  const maincontentLifecycles = singleSpaReact({
      React,
      ReactDOM,
      rootComponent: maincontent
    });
    
    export const bootstrap = maincontentLifecycles.bootstrap;
    export const mount = maincontentLifecycles.mount;
    export const unmount = maincontentLifecycles.unmount;