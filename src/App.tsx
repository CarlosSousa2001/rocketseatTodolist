import './App.css'
import { Header } from './components/Header'
import { ToDoPage } from './components/todo/ToDoPage'

function App() {


  return (
    <div className='back'>
      <div className='container'>
        <Header/>
        <ToDoPage/>
      </div>
    </div>
  )
}

export default App
