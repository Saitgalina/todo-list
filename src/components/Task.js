import styled from "styled-components";
import {AlertDeleteTask} from "./AlertDelete";
import {AlertEditTask} from "./AlertEdit";

const MyTask = styled.div`
    display: flex;
    alight-items: center;
    background: #545c6e;
    width: 600px;
    padding: 8px;
    border-radius: 15px;
    margin-bottom: 5px;
`;

const ContBotton = styled.div`
    display: flex;
    flex-direction: row;
    margin-left:auto;
    gap: 10px;
`


const Task = ({todo}) => {
    return (
        <MyTask>
            {todo}
            <ContBotton>
                <AlertEditTask title={todo}></AlertEditTask>
                <AlertDeleteTask title={todo}></AlertDeleteTask>
            </ContBotton>
        </MyTask>
    );
}

export default Task;