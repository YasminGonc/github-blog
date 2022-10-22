import styled from "styled-components";

export const TitleCardContainer = styled.section`
    display: flex;
    gap: 2rem;

    margin-top: -5.5rem;

    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    padding: 2rem 2.5rem;

    img {
        width: 9.25rem;
        border-radius: 8px;
    }
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 0.5rem;

    h2 {
        font-weight: 700;
        color: ${props => props.theme["base-title"]};
    }

    a {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        text-transform: uppercase;
        text-decoration: none;
        color: ${props => props.theme.blue};
        font-size: 0.75rem;
        font-weight: 700;

        border-bottom: 1px solid transparent;
        height: fit-content;

        &:hover {
            border-bottom: 1px solid ${props => props.theme.blue};
        }
    }
`
export const IconContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    margin-top: 1.5rem;

    svg {
        margin-right: 0.5rem;
        color: ${props => props.theme["base-label"]};
    }
`