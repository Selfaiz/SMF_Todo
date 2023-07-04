import './css/App.css';
import { useEffect, useState } from 'react';
import FormTodo from './component/FormTodo';
import Todo from './component/Todo';
import Footer from './component/footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye  } from '@fortawesome/free-solid-svg-icons';


function App() {
    const [Todos, setTodos] = useState([])

    useEffect(() => {
      const Todos = JSON.parse(localStorage.getItem("Todos")) || []
      setTodos(Todos)
      console.log(Todos);
    }, [])
    
    useEffect(() => {
      if (Todos.length === 0) return;
      localStorage.setItem('Todos', JSON.stringify(Todos))
    }, [Todos])
    function AddTodo(todo) {
      setTodos(prev => {
        return [...Todos, { todo, done: false }]
      })
    }

    
    function removeTodo(indexToRemove){
        setTodos(prev => prev.filter((_, index) => index !== indexToRemove));
        if (Todos.length === 1) {
          localStorage.removeItem('Todos');
        }
    }


    function updateTodo(indexOfTodo,newDone){
      setTodos(prev=>{
        let newTodos=[...prev];
        newTodos[indexOfTodo].done=newDone;
        return newTodos
      })
    }


    const completeTodoNum=Todos.filter(d=>d.done).length;
    const AllTodoNum=Todos.length;
    function showMessage(){
      const pourcentage=completeTodoNum/AllTodoNum*100;
      if (AllTodoNum === 0) {
        return (<>{"Let's start Add Your first Task "}<FontAwesomeIcon icon={faEye} />{"!"}</>);
      }      
      if (AllTodoNum - completeTodoNum === 1 && completeTodoNum >= 1) {
        return 'One more, let\'s go!';
      } else if (pourcentage == 0) {
        return 'You can do it! Just start with the first one ;)';
      } else if (pourcentage === 50) {
        return 'You are in the middle, you can complete them :)';
      } else if (pourcentage === 100) {
        return 'That\'s good! You completed it. Add more tasks to do.';
      }
    }
    function edit(index,newName){
        setTodos(prev=>{
        const newTodos=[...prev]
        newTodos[index].todo=newName
        return newTodos
      })
    }

    return (
      <div className="App">
        <h1>Todos</h1>
        <h2>{completeTodoNum}/{AllTodoNum} Completed</h2>
        <h2>
          {showMessage()}
        </h2>
        <FormTodo onAdd={AddTodo} />
        {Todos.map((todo, index) => (
          <Todo key={index}  {...todo}
            onEdit={newName=>edit(index,newName)} 
            onTrash={()=>removeTodo(index)} 
            onToggle={done=>updateTodo(index,done)}
          />
        ))}
        <Footer/>
      </div>
    );
}

export default App;
