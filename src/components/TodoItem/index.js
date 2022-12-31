import './index.css'

const TodoItem = props => {
  const {object, deletetodo} = props

  const onDelete = () => {
    deletetodo(object)
  }

  return (
    <li className="li">
      <p className="listheading">{object.title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
