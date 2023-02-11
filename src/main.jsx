import React from 'react';
import { createRoot } from 'react-dom/client';
import { CounterApp } from './CounterApp';

import { FirstApp } from './FirstApp';
import './styles.css';


const root = createRoot( document.getElementById('root') )
root.render(
        // <FirstApp title="Hola, Soy Vegeta" />
       <CounterApp value={10}/>
);


