import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import User from './components/User';
import AddNewTodo from './components/AddNewTodo';
import Calendar from './components/Calendar';
import Projects from './components/Projects';
import Todos from './components/Todos';
import EditTodos from './components/EditTodos';

function App() {
  return (
    <div className='App'>
      <Header>
        <User/>
        <AddNewTodo/>
        <Calendar/>
        <Projects/>
      </Header>
      <Main>
        <Todos/>
        <EditTodos/>
      </Main>
hi
    </div>
  );
}

export default App;
