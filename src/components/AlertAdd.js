import {useState} from 'react';
import styled from 'styled-components'
import {ModalAdd} from './ModalAdd'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
const Add = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 15px;
    background: #49678d;
    margin-bottom: 5px;
    cursor: pointer;
`

export const AlertAddTask = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const saveAlert = (event) => {
        const elem = document.getElementById("value-task-title")
        var count_tasks = localStorage.getItem("count_tasks")

        var count_tasks_number = parseInt(count_tasks)

        var t = JSON.parse(localStorage.getItem("tasks")) == null ? [] : JSON.parse(localStorage.getItem("tasks"));
        console.log("Array", t)
        t[count_tasks_number] = elem.value;
        localStorage.setItem("tasks", JSON.stringify(t));
        localStorage.setItem("count_tasks", count_tasks_number+1);

        console.log("count_tasks", count_tasks)
        console.log("elem", elem.value)
        window.location.reload()
        setIsModalVisible(false);
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <ModalAdd close={closeAlert} save={saveAlert}>
                <input id={"value-task-title"} placeholder={"Введите задачу"}/>
            </ModalAdd>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <Add onClick={showAlertButtonClick}>➕</Add>
                {/*<button onClick={showAlertButtonClick}>Show Alert</button>*/}
            </Container>
        </>
    )
}