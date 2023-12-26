import styled from 'styled-components'

const Delete = styled.span`
    position: absolute;
    right: 25px;
    top: 25px;
    height: 40px;
    width: 100px;
    border-radius: 15px;
    background: #49678d;
    margin-bottom: 5px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const DeleteAll = (props) => {

    const deleteAll = (event) => {
        let count_tasks = localStorage.getItem("count_tasks")
        let t = JSON.parse(localStorage.getItem("tasks")) == null ? [] : JSON.parse(localStorage.getItem("tasks"));
        console.log("Array", t)
        t = []
        localStorage.setItem("tasks", JSON.stringify(t));
        localStorage.setItem("count_tasks", 0);
        console.log("count_tasks", count_tasks)
        window.location.reload()
    }

    return (
        <Delete onClick={deleteAll}>
            Удалить все
        </Delete>
    )
}