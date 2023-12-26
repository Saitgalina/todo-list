import {useState} from 'react';
import styled from 'styled-components'
import {Modal} from './Modal'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin-left:auto;
`;
const Remote= styled.div`
    justify-content: right;
    align-items: center;
    width: 30px;
    height: 25px;
    border-radius: 10px;
    background: #49678d;
    margin-left:auto;
    cursor: pointer;
`;


export const AlertDeleteTask = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);


    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const yesAlert = (event) => {
        console.log("title", props.title)
        const elem = document.getElementById("value-task-title")
        var count_tasks = localStorage.getItem("count_tasks")

        var count_tasks_number = parseInt(count_tasks)
        var t = JSON.parse(localStorage.getItem("tasks")) == null ? [] : JSON.parse(localStorage.getItem("tasks"));
        console.log("Array", t)
        t.splice(t.findIndex(item => item === `${props.title}`), 1)
        localStorage.setItem("tasks", JSON.stringify(t));
        localStorage.setItem("count_tasks", count_tasks_number-1);

        console.log("count_tasks delete", count_tasks)
        console.log("elem delete", props.title)
        console.log("Array delete", t)
        window.location.reload()
        setIsModalVisible(false);
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <Modal close={closeAlert} yes={yesAlert} not={closeAlert}>
                <span>Удалить задачу?</span>
            </Modal>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <Remote onClick={showAlertButtonClick}>
                    <div>🗑️</div>
                </Remote>
            </Container>
        </>
    )
}