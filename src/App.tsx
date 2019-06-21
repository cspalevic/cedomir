import React from 'react';
import classnames from 'classnames';
import logo from './logo.svg';
import styles from './styles/flexbox/justifyContent.module.css';
import './App.css';

const App: React.FC = () => {
   const s = classnames(
      styles.center
   );
   return (
      <div className="App">
         <p className={s}>test</p>
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
               Edit <code>src/App.tsx</code> and save to reload.
        </p>
            <a
               className="App-link"
               href="https://reactjs.org"
               target="_blank"
               rel="noopener noreferrer"
            >
               Learn React
        </a>
         </header>
      </div>
   );
}

export default App;
