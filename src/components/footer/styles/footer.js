import styled from 'styled-components';

export const Container = styled.div`
    padding: 80px 0;
    background: #fff;
    color: #000000;
    align-items: center;
    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: colomn;
    justify-content: center;
   max-width: 1000px;
    margin: 0 auto;

    
`;

export const Column = styled.div`
   display: flex;
  flex-direction: column;
   text-align: left;
   margin-left: 40px
`;

export const Row = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    padding: 40px 0;
   
      @media (min-width: 960px){
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
      }
`;

export const Link = styled.div`
    color: #000814;
    margin-bottom: 20px;
    font-size: 18px;
    text-decoration: none;

    &:hover{
        color: #ff5400;
        transition: 200ms ease-in;
    }
`;

export const Title = styled.div`
    font-size: 24px;
    color: #000000;
    margin-bottom: 40px;
    font-weight: 700;
`;
