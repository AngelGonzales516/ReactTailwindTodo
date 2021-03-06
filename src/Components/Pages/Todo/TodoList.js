import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  
  
  
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const styles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    padding: "1rem",
    borderBottom: "",
    justifyContent:"space-between",
    alignItems:"center",
  }

  const myClass = (completed)?"striked": "";
  return (
    <li style={styles}>
    <span className={myClass}>{descripcion}</span>
    <span className="flex">
    <MdDone style={{"cursor":"pointer","padding":"0.5rem"}} size="2.5em" onClick={onClick}></MdDone>
    <MdDelete style={{ "cursor": "pointer", "padding": "0.5rem" }} size="2.5em" onClick={onDeleteClick}></MdDelete>
    </span>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.id}
        descripcion={o.description}
        id={o.id}
        fb_id={o.fb_id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
  
  
  
  
  
  
  
  /*const onClick = (e)=>{
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
*/