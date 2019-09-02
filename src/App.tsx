import React from 'react';
import Intro from 'components/Intro';
import Resume from 'components/Resume';
import Footer from 'components/Footer';

class App extends React.Component {
   render() {
      return (
         <div>
            <Intro />
            <Resume />
            <Footer />
         </div>
      );
   }
}

export default App;