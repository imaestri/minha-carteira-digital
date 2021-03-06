import styled from 'styled-components';


interface ILegendProps{
    color: string;
}



export const Container = styled.div`
    width: 100%;

    display:flex;
    flex-direction:column;

    background-color: ${props => props.theme.colors.tertiary};
    color: ${props => props.theme.colors.white};

    margin: 10px 0;
    padding: 30px 20px;

    border-radius: 7px;

    transition: all .3s;
    position: relative;

    &:hover {
        transform: translateX(10px);
    }

`;


export const ChartContainer = styled.div`

    flex: 1;
    height: 340px;
`;


export const Header = styled.header`
    
    display:flex;
    justify-content: space-between;

    width: 100%;
    
    > h3 {
        margin-bottom: 8px;
        padding-left: 16px;
    }
`;
export const LegendContainer = styled.ul`
    list-style: none;
    
    display: flex;
`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;
    font-size: 13px;
    margin-left: 7px;



    > div{
        background-color: ${props => props.color};

        width: 55px;
        height: 22px;
        border-radius: 2px;
        
        font-size: 15px;
        text-align: center;
    }

    span {
        margin-left: 5px;
    }
`;
