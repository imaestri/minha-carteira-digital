import styled from 'styled-components';


export const Container = styled.div`
    width: 32%;
    height: 110px;
    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    border-radius: 7px;
    margin: 10px 0;
    padding: 30px 20px;

    display:flex;
    flex-direction: column;
    justify-content: space-between;

    transition: all .3s;
    position: relative;

    &:hover {
        transform: translateX(10px);
    }


    > header img{
        width: 20px;
        margin-left: 7px;
    }

    > header p{

        font-size: 14px;
    }

    > footer span{
        font-size: 14px;
    }
`;



