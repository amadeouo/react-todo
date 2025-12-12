import Field from "./Field";
import Button from "./Button";
import {useContext, useState} from "react";
import {TaskContextConst} from "../context/TaskContextConst";

const AddTaskForm = () => {
  const {
    addTask,
    newTaskTitle,
    setNewTaskTitle,
    newTaskInputRef,
  } = useContext(TaskContextConst);

  const [error, setError] = useState('')

  const clearNewTaskTitle = newTaskTitle.trim()
  const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

  const onSubmit = (event) => {
    event.preventDefault()
    if (!isNewTaskTitleEmpty) {
      addTask(clearNewTaskTitle)
    }
  }

  const onInput = (event) => {
    const { value } = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    if (hasOnlySpaces) {
      setError('The task cannot be empty The task cannot be emptyThe task cannot be emptyThe task cannot be emptyThe task cannot be empty')
    }

    setNewTaskTitle(event.target.value)
  }

  return (
    <form className="todo__form" onSubmit={onSubmit}>
      <Field
        className="todo__field"
        label="New task title"
        id="new-task"
        value={newTaskTitle}
        error={error}
        onInput={onInput}
        ref={newTaskInputRef}
      />
      <Button
        type="submit"
        isDisabled={isNewTaskTitleEmpty}
      >
        Add
      </Button>
    </form>
  )
}

export default AddTaskForm