import styled from "@emotion/styled";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.lighterBg};
    margin: 0 auto;
    margin-top: 50px;
    width: 300px;
    margin-bottom: 50px;
    padding-top: 50px;
    /* border: 1px solid #bbb; */
    border-radius: 10px;
    box-shadow: ${props => props.theme.filters.shadow};
    `;

export const Descr = styled.div`
    margin: 0 auto;
    margin-bottom: 50px;    
`;

export const UserAvatar = styled.img`
    display: block;
    width: 30%;
    margin: 0 auto;
    border-radius: 50%;
    margin-bottom: 20px;
`;

export const UserName = styled.p`
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    font-size: 1.5em;
`;

export const TagLocation = styled.p`
    margin: 0;
    margin-bottom: 10px;
    text-align: center;
    color: ${props => props.theme.colors.grayText};
`;

export const UserStats = styled.ul`
    margin: 0;
    display: flex;
    padding: 0;
    border-top: 1px solid #bbb;
    background-color: ${props => props.theme.colors.darkerBg};
    list-style: none;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
`;

export const StatList = styled.li`
    flex-basis: 33.3333%;
    text-align: center;
    padding: 20px;
    :not(:last-child) {
    border-right: 1px solid #bbb;
    }
`;

export const Label = styled.span`
    display: block;
    font-size: 16px;
    color: ${props => props.theme.colors.grayText};
`;

export const Quantity = styled.span`
    display: block;
    font-size: 16px;
    margin-top: 5px;
    font-weight: 700;
`;