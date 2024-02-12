import { FormEvent, useState } from 'react'
import { List } from './List'
import styles from './ToDoPage.module.css'
import { UUID } from "uuidjs";
import clip from '../../assets/Clipboard.png'


export interface Task {
    id?: string;
    text: string;
    check: boolean;
}
export function ToDoPage() {

    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState<Task[]>([])

    const [countTask, setCountTask] = useState(0)
    const [countCompltedTask, setCountCompletedTask] = useState(0)
    function handleCountTask(count:any) {
        setCountTask(count)
    }

    function handlerCountCompletedTask() {
        const filterCompleted = taskList.filter(item => item.check === true)
        setCountCompletedTask(filterCompleted.length)
    }

    function addNewTask(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setTaskList([...taskList, { id: UUID.generate(), text: task, check: false }])
        const counttask = taskList.length + 1;
        handleCountTask(counttask);
        setTask('');
    }

    function completedTask(id: string, checked: boolean) {
        const taskToUpdateIndex = taskList.findIndex(item => item.id === id);

    if (taskToUpdateIndex !== -1) {
        taskList[taskToUpdateIndex].check = checked;    
        handlerCountCompletedTask();
    }
        return null;
    }

    function deleteTask(id: string) {
        const newTask = taskList.filter(item => item.id !== id);
        const count = newTask.length
        setTaskList(newTask)
        handleCountTask(count);
    }



    return (
        <div className={styles.todoContainer}>
            <form onSubmit={addNewTask}>
                <input
                    value={task}
                    onChange={e => setTask(e.target.value)}
                    type="text" placeholder="Adicione uma nova tarefa" required />
                <button>Criar +</button>
            </form>
            <div className={styles.countTodo}>
                <p>Tarefas Criadas <span>{countTask}</span></p>
                <p>Tarefas Concluídas <span>{countCompltedTask}</span></p>
            </div>
            {taskList.length === 0 ? (
                <div className={styles.clipboard}>
                    <img src={clip} alt="clipboard" />
                    <p>Você ainda não tem tarefas cadastradas</p>
                    <span>Crie tarefas e orgazine seus itens a fazer</span>
                </div>
            ) : (
                <div>
                    {taskList.map((item) => (
                        <List key={item.id} list={item} completedTask={completedTask} onclick={deleteTask} />
                    ))}
                </div>
            )}

        </div>
    )
}