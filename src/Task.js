import CheckButton from "./components/CheckButton"
import "./components/CheckButton.scss"

const Task = (props) => {
    return (
        <div className="uniqueTask">
            <CheckButton />
            <h2 className="taskName">{props.taskName}</h2>
            <button className="deletTaskButton"onClick={() => props.deletTask(props.id)}> X </button>
        </div>
    )
}

export default Task