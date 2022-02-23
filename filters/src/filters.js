import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Paper from '@material-ui/core/Paper';
import singleSpaReact from 'single-spa-react';
import store from 'store/store';
import { Button } from 'antd';
import 'antd/dist/antd.css';
import { Select,Space } from 'antd';
import styles from './filters.module.scss';
import "./index.css";
import { TreeSelect } from "antd";
import AllFilters from './AllFilters';
import Quickfilters from './quickfilters';

export default function  filters(){

      return (
        <>
         <div className={styles['space-around']}>
           <AllFilters/>
           <Quickfilters/>
         </div>
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