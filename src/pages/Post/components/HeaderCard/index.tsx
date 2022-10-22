import { HeaderCardContainer, IconContainer, LinkContainer, NavigationLink } from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function HeaderCard() {
    return (
        <HeaderCardContainer>
            <LinkContainer>
                <NavigationLink to="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Voltar
                </NavigationLink>
                <a href="">
                    Ver no Github
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </LinkContainer>

            <h2>JavaScript data types and data structures</h2>

            <IconContainer>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    cameronwll
                </span>

                <span>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    Há 1 dia
                </span>

                <span>
                    <FontAwesomeIcon icon={faComment} />
                    5 comentários
                </span>
            </IconContainer>
        </HeaderCardContainer>
    )
}