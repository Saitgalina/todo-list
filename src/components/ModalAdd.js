import styled from 'styled-components'

const Backdrop = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #0000007d;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Content = styled.div`
    width: 250px;
    height: 50px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px 25px;
    background: white;
    border-radius: 10px;
    position: relative;
    color: black;
`;

const Close = styled.span`
    position: absolute;
    right: 5px;
    top: 5px;
    background: red;
    height: 15px;
    width: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dadada;
    border-radius: 50px;
    color: black;
    &:after {
        content: 'x';
        font-size: 12px;
        line-height: 15px;
    }
    cursor: pointer;
`;

const Save = styled.span`
    position: absolute;
    right: 105px;
    top:50px;
    height: 25px;
    width: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #dadada;
    border-radius: 50px;
    color: black;
    font-size: 12px;
    cursor: pointer;
`;

export const ModalAdd = (props) => {

    const contentComponentClickHandle = (event) => {
        event.stopPropagation();
    }
    console.log("children",  props.children)
    return (
        <Backdrop onClick={props.close}>
            <Content onClick={contentComponentClickHandle}>
                <Close onClick={props.close}/>
                {props.children}
                <Save onClick={props.save}>Сохранить</Save>
            </Content>
        </Backdrop>
    )
}