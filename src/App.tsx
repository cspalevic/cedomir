import React, { useState } from 'react';
import Intro from 'components/Intro';
import Resume from 'components/Resume';
import Footer from 'components/Footer';

enum Theme {
   Light,
   Dark
}

const App: React.FC = () => {
   const [theme, setTheme] = useState<Theme>(Theme.Dark);
   return (
      <main className={theme === Theme.Light ? "light-theme" : ""}>
         <Intro onThemeToggle={() => setTheme(theme === Theme.Light ? Theme.Dark : Theme.Light)} />
         <Resume />
         <Footer />
      </main>
   )
}

export default App;