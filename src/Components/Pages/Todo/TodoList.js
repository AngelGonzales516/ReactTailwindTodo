import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(id);
  }

  const myClass = (completed)?"striked": "";
  return (
    <li className="flex flex-row bg-yellow-400 bg-opacity-40 ">
    <span className={myClass}>{descripcion}</span>
    <section className="ml-5">
    <MdDone onClick={onClick}></MdDone>
    <MdDelete onClick={onDeleteClick}></MdDelete>
    </section>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList flex flex-row ">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
