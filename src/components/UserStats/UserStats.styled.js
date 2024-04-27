import styled from "@emotion/styled";

export const UserStatsContainer = styled.ul`
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