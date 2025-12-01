import {memo, useContext, useMemo} from 'react'
import {TaskContextConst} from "../context/TaskContextConst";

const TodoInfo = () => {
  const {
    tasks,
    deleteAllTasks,
  } = useContext(TaskContextConst)

  const total = tasks.length
  const hasTasks = total > 0
  const done = useMemo(() => {
    return tasks.filter(({ isDone }) => isDone).length
  }, [tasks])

  return (
    <div className="todo__info">
      <div className="todo__total-tasks">
        Done {done} from {total}
      </div>
      {hasTasks && (
        <button
          className="todo__delete-all-button"
          type="button"
          onClick={deleteAllTasks}
        >
          Delete all
        </button>
      )}
    </div>
  )
}

export default memo(TodoInfo)