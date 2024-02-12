import { ChangeEvent, useState } from 'react';
import styles from './List.module.css'
import { Task } from './ToDoPage'
import { FaTrash } from 'react-icons/fa';
export function List({ list, completedTask, onclick }: { list: Task; completedTask: (id: string, checked: boolean) => void; onclick:(id:string)=> void }) {

    const [isChecked, setIsChecked] = useState(false);

    function handleCheckboxChange(e: ChangeEvent<HTMLInputElement>) {
        setIsChecked(e.target.checked)
        Teste()
    }

    function Teste() {
        completedTask(list.id as string, !isChecked)
    }
    

    return (
        <article className={styles.article}>
            <div className={styles.listcontent}>
                <input type="checkbox"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                    className={styles.checkboxCustom} />
                <p>{list.text}</p>
            </div>
            <button onClick={()=> onclick(list.id as string)}>
                <FaTrash/>
            </button>
        </article>
    )
}