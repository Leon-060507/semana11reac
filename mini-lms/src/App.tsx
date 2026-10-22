import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function Saludo(){
return (
<div>
  <h2>Bienvenido</h2>
</div>
);
}

function App() {
const titulo = 'Mini-LMS · Semana 11';
const curso ="JavaScript Avanzado";
 return (
 <div>
 <h1>{titulo}-{curso}</h1>
 <Saludo/>
 <p>Mi primer componente con React.</p>
 </div>
 );
}
export default App;
