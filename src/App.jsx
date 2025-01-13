import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const [showFinished, setShowFinished] = useState(true);

    useEffect(() => {
        const todoString = localStorage.getItem("todos");
        if (todoString) {
            const todos = JSON.parse(todoString);
            setTodos(todos);
        }
    }, []);

    useEffect(() => {
        if (todos.length > 0) {
            localStorage.setItem("todos", JSON.stringify(todos));
        }
    }, [todos]);

    const handleEdit = (e, id) => {
        let t = todos.find((item) => item.id === id);
        setTodo(t.todo);
        let newTodos = todos.filter((item) => item.id !== id);
        setTodos(newTodos);
    };

    const handleDelete = (e, id) => {
        if (window.confirm("Are you sure you want to delete this Todo?")) {
            let newTodos = todos.filter((item) => item.id !== id);
            setTodos(newTodos);
        }
    };

    const handleAdd = () => {
        setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
        setTodo("");
    };

    const handleChange = (e) => {
        setTodo(e.target.value);
    };

    const handleCheckbox = (e) => {
        let id = e.target.name;
        let index = todos.findIndex((item) => item.id === id);
        let newTodos = [...todos];
        newTodos[index].isCompleted = !newTodos[index].isCompleted;
        setTodos(newTodos);
    };

    const toggleFinished = (e) => {
        setShowFinished(!showFinished);
    };

    return (
        <>
            <Navbar />
            <main className="flex flex-col justify-center items-center mt-8">
                <div className="addTodo flex flex-col justify-center items-center bg-white shadow-md p-3 rounded-xl gap-8 w-4/5 max-sm:w-[95%]">
                    <h1 className="font-bold text-4xl">Add a Todo</h1>
                    <span className="flex gap-4 justify-center w-[90%] mb-4">
                        <input
                            type="text"
                            className="outline-1 bg-orange-50 border-2 p-2 w-2/3 rounded-3xl border-black"
                            autoFocus
                            placeholder="Enter a new Todo"
                            onChange={handleChange}
                            value={todo}
                        />
                        <button
                            className="bg-teal-300 rounded-full px-4 py-2 outline outline-2 hover:bg-teal-200 disabled:bg-gray-400"
                            onClick={handleAdd}
                            disabled={todo.length <= 3}
                        >
                            Save
                        </button>
                    </span>
                </div>

                <div className="todoList mt-5 flex flex-col justify-center items-center bg-white shadow-md p-3 rounded-xl gap-8 w-4/5 max-sm:w-[95%] px-0">
                    <h1 className="font-bold text-4xl">Todo List</h1>
                    <span>
                        <input
                            onChange={toggleFinished}
                            type="checkbox"
                            checked={showFinished}
                        />{" "}
                        Show Finished Todo(s)
                    </span>
                    <div className="todos flex flex-col gap-3 w-full px-12 max-sm:px-1">
                        {todos.length === 0 && (
                            <div className="text-center my-8 font-semibold">
                                [No Todo(s) added yet]
                            </div>
                        )}
                        {todos.map((item) => {
                            return (
                                (showFinished || !item.isCompleted) && (
                                    <div
                                        key={item.id}
                                        className="todo flex justify-between items-center border-y-2 p-2"
                                    >
                                        <span className="flex gap-3 justify-center items-center">
                                            <input
                                                type="checkbox"
                                                name={item.id}
                                                id="isCompleted"
                                                checked={item.isCompleted}
                                                onChange={handleCheckbox}
                                            />
                                            <span
                                                className={
                                                    item.isCompleted
                                                        ? "font-bold line-through"
                                                        : "font-bold"
                                                }
                                            >
                                                {item.todo}
                                            </span>
                                        </span>
                                        <span className="flex gap-4">
                                            <button
                                                className="bg-teal-300 rounded-full px-4 py-2 outline outline-2 hover:bg-teal-200"
                                                onClick={(e) =>
                                                    handleEdit(e, item.id)
                                                }
                                            >
                                                <FaEdit />
                                            </button>
                                            <button
                                                className="bg-teal-300 rounded-full px-4 py-2 outline outline-2 hover:bg-teal-200"
                                                onClick={(e) => {
                                                    handleDelete(e, item.id);
                                                }}
                                            >
                                                <MdDeleteForever />
                                            </button>
                                        </span>
                                    </div>
                                )
                            );
                        })}
                    </div>
                </div>
            </main>
        </>
    );
}

export default App;
