import './App.css'
import Header from './components/Header.tsx'
import Todo from './pages/Todo.tsx'
import Footer from './components/Footer.tsx'

function App() {

  return (
    <>
      <div id="todo">
        <Header />
        <Todo/>
        <Footer/>
      </div>
    </>
  )
}

export default App
