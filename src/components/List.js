import styled from "styled-components";
import Task from "./Task";

const ContList = styled.div`
    width: 600px;
`;

const List = (props) => {
    console.log("list", props.tasks)
    return (
        <div>
            <ContList>
                {props.tasks.map(item => (
                    <Task key={item.id} todo={item}></Task>
                ))}
            </ContList>
        </div>
    );
}

export default List;