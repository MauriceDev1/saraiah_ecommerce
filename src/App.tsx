import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'
import { useLocation } from '@solidjs/router'

const App = ({children}: any) => {
  const location = useLocation();

  return (
    <main>
      {
        location.pathname === '/login' || 
        location.pathname === '/register' 
          ? 
            null 
          : 
            <Nav/> 
      }
      <div class="min-h-screen">
          {children}
      </div>
      {
        location.pathname === '/login' || 
        location.pathname === '/register' ||
        location.pathname === '/profile' ||
        location.pathname === '/orders' ||
        location.pathname === '/account' ||
        location.pathname === '/notification' ||
        location.pathname === '/favourite'
          ? 
            null 
          : 
            <Footer />
      }
      <div class='w-full bg-black h-screen fixed z-50'>
      test
      </div>
    </main>
  )
}

export default App
