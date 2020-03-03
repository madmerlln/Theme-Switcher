import React, {useState} from 'react';
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';
import {ThemeProvider} from 'styled-components';

import * as themes from './styles/themes';
import ThemeContext from './styles/themes/context';

function App() {
  const [theme, setTheme] = useState(themes.dark);

  const toggleTheme = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  }

  return (
    <div>
      <ThemeContext.Provider value={theme}>
        <ThemeContext.Consumer>
          {theme => (
            <ThemeProvider theme={theme}>
              <ThemeSwitcher toggleTheme={toggleTheme} />
              <TodoList />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </ThemeContext.Provider>
    </div>
  )
}

export default App;
