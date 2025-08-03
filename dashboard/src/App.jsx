import './App.css'
import AppRoute from './AppRoute';
import { ProductProvider} from './context/ProductsContext';
import { ThemeProvider } from './context/ThemeContext'
import { UserProvider } from './context/UserContext'

function App() {

  return (
    <ProductProvider>
      <UserProvider>
        <ThemeProvider>
          <AppRoute />
        </ThemeProvider>
      </UserProvider>
    </ProductProvider>
  );
}

export default App
