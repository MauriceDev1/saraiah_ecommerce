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
    </main>
  )
}

export default App
