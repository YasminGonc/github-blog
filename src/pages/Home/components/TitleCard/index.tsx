import { ContentContainer, IconContainer, TitleCardContainer, TitleContainer } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export function TitleCard() {
    return(
        <TitleCardContainer>
            <img src="https://github.com/YasminGonc.png" alt="" />
            
            <ContentContainer>
                <TitleContainer>
                    <h2>Cameron Williamson</h2>
                    <a href="">
                        GitHub
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </TitleContainer>

                <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>

                <IconContainer>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        cameronwll
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faBuilding} />
                        Rocketseat
                    </span>
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        32 seguidores
                    </span>
                </IconContainer>
            </ContentContainer>
        </TitleCardContainer>
    )
}