import React from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Select,Space } from 'antd';
import styles from './filters.module.scss';

export default function  filters(){

      return ( 
          <>
            <h1 >Filters</h1>
          </>
       );
  }
  
  const fitersLifecycles = singleSpaReact({
      React,
      ReactDOM,
      rootComponent: filters
    });
    
    export const bootstrap = fitersLifecycles.bootstrap;
    export const mount = fitersLifecycles.mount;
    export const unmount = fitersLifecycles.unmount;