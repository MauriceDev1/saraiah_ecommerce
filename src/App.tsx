import Nav from './components/navigation/Nav'
import Footer from './components/navigation/Footer'


const App = ({children}: any) => {

  return (
    <main>
      <Nav/>
      <div class="min-h-screen">
          {children}
      </div>
      <Footer />
      <div class='w-full bg-black h-screen fixed z-50'>
      test
      </div>
    </main>
  )
}

export default App
