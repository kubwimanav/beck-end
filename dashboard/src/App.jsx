import './App.css'
import AppRoute from './AppRoute';
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <UserProvider>
      <ThemeProvider>
        <AppRoute />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App
