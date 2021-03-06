import styled from 'styled-components';

interface IContainerProps{
    color: string;
}



export const Container = styled.div`
    width: 32%;
    height: 150px;
    
    margin: 10px 0;

    border-radius: 10px;
    padding: 10px 20px;

    background-color: ${props => props.color};
    color: ${props => props.theme.colors.white};

    position: relative;
    overflow: hidden;

    transition: all .3s;
    position: relative;

    &:hover {
        transform: translateX(10px);
    }

    > img {
        height: 110%;
        position: absolute;
        top: -10px;
        right: 5px;

        opacity: .3;

    }

    > span{
        font-size: 18px;
        font-weight: 500;
    }

    > small{
        font-size: 12px;
        position:absolute;
        bottom: 10px;
    }

`;