export function Todos({todos,getTodos}){
    return<div>
        {todos.map(function(todo){
            return <div>
                <h1>{todo.title}</h1>
                <h1>{todo.description}</h1>
                <button onClick={()=>{
                    fetch("http://localhost:3000/completed",{
                        method:"PUT",
                        body:JSON.stringify({
                            id:todo._id
                        }),
                        headers:{
                            "Content-Type":"application/json"
                        }
                    })
                    .then(async function (res) {
                        const json=await res.json();
                        alert("Marked as completed");
                        getTodos();
                    })
                }}>{todo.completed==true?"Completed":"Mark as completed"}</button>
            </div>
        })}
    </div>
}
