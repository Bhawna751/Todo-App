import "./App.css";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import User from "./components/User";
import AddNewTodo from "./components/AddNewTodo";
import Calendar from "./components/Calendar";
import Projects from "./components/Projects";
import Todos from "./components/Todos";
import EditTodos from "./components/EditTodos";
import VideoBackground from "./components/VideoBackground";


function App() {
  return (
    <div className="App">
      <Sidebar>
        <User />
        <AddNewTodo />
        <Calendar />
        <Projects />
      </Sidebar>
      
      <Main>
      <VideoBackground/>
        <Todos />
        <EditTodos />
      </Main>
      
      hi
    </div>
  );
}

export default App;
