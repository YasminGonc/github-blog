import styled from "styled-components";

export const HomeContainer = styled.main`
    padding: 0 18rem;

    @media screen and (max-width: 1024px) {
        padding: 0 10rem;
    }

    @media screen and (max-width: 768px) {
        padding: 0 4rem;
    }

    @media screen and (max-width: 425px) {
        padding: 0 1rem;
    }
`