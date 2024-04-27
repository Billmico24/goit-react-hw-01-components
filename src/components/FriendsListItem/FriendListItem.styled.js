import styled from "@emotion/styled";

export const ListItem = styled.li`
    background-color: ${props => props.theme.colors.lighterBg};
    min-width: 230px;
    margin: 0 auto 15px;
    padding: 12px;
    display: flex;
    justify-content: left;
    gap: 20px;
    align-items: center;
    box-shadow: ${props => props.theme.filters.shadow};
    border-radius: 4px;
    
`;

export const ListStatus = styled.span`
     display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* background-color: green; */
  
`;


export const ListAvatar = styled.img`
    margin: 0;
  font-size: 24px;
  font-weight: 600;
`;


export const ListName = styled.p`
    margin: 0;
  font-size: 24px;
  font-weight: 600;
`;

