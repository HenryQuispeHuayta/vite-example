import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import useTodoList from '../hooks/useTodoList'
import './Todo.css'

const TodoExample: React.FC = () => {
  const { todos, inputValue, handleInputChange, handleAddTodo, handleToggleTodo, handleRemoveTodo, handleDragEnd } = useTodoList()

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddTodo()
    }
  }

  return (
    <div className="todo-container">
      <h1>Ejemplo de TODO</h1>
      <div className="todo-input">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Añadir nueva tarea"
        />
        <button onClick={handleAddTodo}>Añadir</button>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul className="todo-list" {...provided.droppableProps} ref={provided.innerRef}>
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className={todo.completed ? 'completed' : ''}
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo.id)}
                      />
                      <span>{todo.text}</span>
                      <button onClick={() => handleRemoveTodo(todo.id)}>Eliminar</button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default TodoExample