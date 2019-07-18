import React from 'react';
import Console from 'components/Console';
import Resume from 'components/Resume';
import Footer from 'components/Footer';

class App extends React.Component {
   render() {
      return (
         <div>
            <Console />
            <Resume />
            <Footer />
         </div>
      );
   }
}

export default App;