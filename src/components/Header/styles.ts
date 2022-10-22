import styled from "styled-components";

import cover from "../../assets/header-cover.png"

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;

    padding: 4rem 0 8.375rem 0;
    background-color: ${props => props.theme["base-profile"]};
    background-image: url(${cover});
    background-repeat: no-repeat;
    background-size: cover;
`