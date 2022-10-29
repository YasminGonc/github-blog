import { HeaderCardContainer, IconContainer, LinkContainer, NavigationLink } from "./styles";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare, faChevronLeft, faCalendarDay, faComment } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { GitHubContext } from "../../../../context/GitHubContext";

export function HeaderCard() {
    const { issuesContent, postIndex, handlePublishedDateRelativeToNow } = useContext(GitHubContext);
    
    return (
        <HeaderCardContainer>
            <LinkContainer>
                <NavigationLink to="/">
                    <FontAwesomeIcon icon={faChevronLeft} />
                    Voltar
                </NavigationLink>
                <a href={issuesContent[postIndex].html_url} target="blank">
                    Ver no Github
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </LinkContainer>

            <h2>{issuesContent[postIndex].title}</h2>

            <IconContainer>
                <span>
                    <FontAwesomeIcon icon={faGithub} />
                    YasminGonc
                </span>

                <span>
                    <FontAwesomeIcon icon={faCalendarDay} />
                    {handlePublishedDateRelativeToNow(issuesContent[postIndex].created_at)}
                </span>

                <span>
                    <FontAwesomeIcon icon={faComment} />
                    {issuesContent[postIndex].comments} {issuesContent[postIndex].comments <=1 ? 'comentário' : 'comentários'} 
                </span>
            </IconContainer>
        </HeaderCardContainer>
    )
}