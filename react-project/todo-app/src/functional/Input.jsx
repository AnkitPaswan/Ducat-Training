import { useEffect, useState } from "react"


export default function Input(props) {

    const [todo, setTodo] = useState("");
    const [error, setError] = useState(false);

    const changeInput = (e) => {
        setTodo(e.target.value);

        if (e.target.value) {
            setError(false)

        } else {
            setError(true)
        }
    }

    const submit = (e) => {
        e.preventDefault();

        if (props.todos.includes(todo)) {
            alert("Todo already exists!");
            setTodo("");
            return
        }

        if (todo) {
            if (props.editData.index === -1) {

                props.addTodo(todo);
            } else {

                props.updateTodo(props.editData.index, todo)
            }
            setTodo("");

        } else {
            setError(true)
        }

    }


    useEffect(() => {
        if (props.editData.index !== -1) {
            setTodo(props.editData.data)
        }
    }, [props.editData.data, props.editData.index])
    return (
        <section>
            <form onSubmit={submit}>
                <div className="row">
                    <div className="col-10">
                        <input type="text" className="form-control" placeholder="Enter Todo"
                            value={todo}
                            onChange={changeInput}
                        />
                        {error && <p className="text-danger">please enter todo</p>}
                    </div>
                    <div className="col-2 d-grid">
                        <button className="btn btn-primary" >
                            {props.editData.index === -1 ? "Add Todo" : "Edit Todo"}
                        </button>
                    </div>
                </div>
            </form>
        </section>
    )
}
