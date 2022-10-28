import styled from "styled-components";

export const PostListContainer = styled.section`
    margin: 3rem 0;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

    @media screen and (max-width: 425px) {
        display: flex;
        flex-direction: column;
    }
`
export const PostContainer = styled.div`
    max-height: 16.25rem;
    padding: 2rem;
    background-color: ${props => props.theme["base-post"]};
    border: 1px solid transparent;
    border-radius: 10px;

    cursor: pointer;

    &:hover {
        border: 1px solid ${props => props.theme["base-label"]};
    }
`
export const TitleContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;

    margin-bottom: 1.25rem;

    h2 {
        font-size: 1.25rem;
        font-weight: 700;
        color: ${props => props.theme["base-title"]};
    }

    span {
        font-size: 0.875rem;
        color: ${props => props.theme["base-span"]};
        text-align: right;
    }
`
export const TextContainer = styled.div`
    max-height: 7rem;
    overflow-y: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`