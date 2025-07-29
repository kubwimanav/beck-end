import './App.css'
import Layout from './components/Layout'
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <UserProvider>
      <ThemeProvider>
        <Layout />
      </ThemeProvider>
    </UserProvider>
  );
}

export default App
