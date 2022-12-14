import styled from "styled-components";

export const PublicationsSearchBarContainer = styled.section`
    margin-top: 4.5rem;
`
export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-weight: 700;
        font-size: 1.125rem;
        color: ${props => props.theme["base-subtitle"]};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-span"]};
    }
`
export const SearchInput = styled.input`
    width: 100%;
    margin-top: 0.75rem;
    padding: 0.75rem 1rem;

    color: ${props => props.theme["base-text"]};

    background-color: ${props => props.theme["base-input"]};
    border-radius: 6px;
    border: 1px solid ${props => props.theme["base-border"]};

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }

`