import styled from 'styled-components';


interface ILegendProps{
    color: string;
}


export const Container = styled.div`
  width: 66%;
  height: 260px;
  
  background-color: ${props => props.theme.colors.tertiary};
  color: ${props => props.theme.colors.white};

  border-radius: 7px;
  margin: 10px 0;
  padding: 30px 20px;
 
  display: flex;

  transition: all .3s;
  position: relative;

    &:hover {
        transform: translateX(10px);
    }

`;

export const SideRight = styled.main`

    display: flex;
    flex: 1; 
    justify-content: center;


`;

export const SideLeft = styled.aside`
    padding: 30px 20px;

    > h2{
        margin-bottom: 20px;
    }

`;

export const LegendContainer = styled.ul`
  list-style:none;
  
  height: 175px;
  padding-right: 20px;
  overflow-y: scroll;

  ::-webkit-scrollbar{
        width: 10px;
    }

  ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.secondary};
        border-radius: 10px;
    }

  ::-webkit-scrollbar-track{
        background-color: ${props => props.theme.colors.tertiary};
    }


    > h3{
        margin-bottom: 20px;
    }


`;

export const Legend = styled.li<ILegendProps>`
    display: flex;
    align-items: center;

    margin-bottom: 7px;

    font-size: 13px;



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
