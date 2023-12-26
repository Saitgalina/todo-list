import {useState} from 'react';
import styled from 'styled-components'
import {ModalAdd} from "./ModalAdd";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    margin-left:auto;
`;
const Edit = styled.div`
    justify-content: right;
    align-items: center;
    width: 30px;
    height: 25px;
    border-radius: 10px;
    background: #49678d;
    margin-left: auto;
    cursor: pointer;
`;


export const AlertEditTask = (props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [Title, setTitle] = useState(props.title)

    const showAlertButtonClick = () => {
        setIsModalVisible(true)
    }

    const closeAlert = () => {
        setIsModalVisible(false);
    }

    const editTitle = (event) => {
        const elem = document.getElementById("value-task-title")
        console.log(event.target.value)
        console.log(elem)
        setTitle(event.target.value)
    }

    const saveAlert = (event) => {
        const elem = document.getElementById("value-task-title")
        var t = JSON.parse(localStorage.getItem("tasks")) == null ? [] : JSON.parse(localStorage.getItem("tasks"));
        console.log("массив до изменений", t)
        let index = t.findIndex(item => item === `${props.title}`)
        console.log("индекс найденой задачи", index)
        t[index] = elem.value;
        console.log("массив после изменений", t)
        localStorage.setItem("tasks", JSON.stringify(t));
        window.location.reload()
        setIsModalVisible(false);
    }

    const renderModal = () => {
        if (!isModalVisible) {
            return null;
        }

        return (
            <ModalAdd close={closeAlert} save={saveAlert}>
                <input id={"value-task-title"} value={`${Title}`} onChange={editTitle} />
            </ModalAdd>
        );
    }

    return (
        <>
            {renderModal()}
            <Container>
                <Edit onClick={showAlertButtonClick}>
                    <div>✏️</div>
                </Edit>
            </Container>
        </>
    )
}