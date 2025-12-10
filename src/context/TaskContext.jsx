import {TaskContextConst} from "./TaskContextConst";
import {useTasks} from "../hooks/useTasks";
import {useIncompleteTaskScroll} from "../hooks/useIncompleteTaskScroll";


export const TasksProvider = (props) => {
  const { children } = props

  const {
    tasks,
    filteredTasks,
    deleteTask,
    deleteAllTasks,
    toggleTaskComplete,
    newTaskTitle,
    setNewTaskTitle,
    searchQuery,
    setSearchQuery,
    newTaskInputRef,
    addTask
  } = useTasks()

  const { firstIncompleteTaskRef, firstIncompleteTaskId } = useIncompleteTaskScroll(tasks)

  return (
    <TaskContextConst.Provider
      value={{
        tasks,
        filteredTasks,
        firstIncompleteTaskRef,
        firstIncompleteTaskId,
        deleteTask,
        deleteAllTasks,
        toggleTaskComplete,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        newTaskInputRef,
        addTask,
      }}
    >
      {children}
    </TaskContextConst.Provider>
  )
}