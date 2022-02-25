import React from 'react';
import styles from './app.module.scss';
import Logo from '../assets/logo.png';
import {Select} from 'antd';
export default function App(){
    return(   
        <> 
                <div className={styles['header-style']}><img src={Logo} />
                </div>
                <div id="single-spa-application:filters"></div>
                <div id="single-spa-application:maincontent"></div>
          
        </>
        
    );
}