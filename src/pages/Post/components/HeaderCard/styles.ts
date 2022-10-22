import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderCardContainer = styled.section`
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    padding: 2rem;
    margin-top: -5.5rem;

    h2 {
        margin: 1.25rem 0 0.5rem 0;

        font-weight: 700;
        font-size: 1.5rem;
        color: ${props => props.theme["base-title"]};
    }
`
export const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        border-bottom: 1px solid transparent;
        color: ${props => props.theme.blue};
        text-decoration: none;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }
    }
`
export const NavigationLink = styled(NavLink)`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    border-bottom: 1px solid transparent;
    color: ${props => props.theme.blue};
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid ${props => props.theme.blue};
    }
`
export const IconContainer = styled.div`
    display: flex;
    gap: 2rem;
    color: ${props => props.theme["base-span"]};

    span {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
`