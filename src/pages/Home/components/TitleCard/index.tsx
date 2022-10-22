import { ContentContainer, IconContainer, TitleCardContainer, TitleContainer } from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faBuilding, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useContext } from "react";
import { GitHubContext } from "../../../../context/GitHubContext";

export function TitleCard() {
    const { gitHubInfos } = useContext(GitHubContext);

    return (
        <TitleCardContainer>
            <img src={gitHubInfos?.avatar} alt="" />

            <ContentContainer>
                <TitleContainer>
                    <h2>{gitHubInfos?.name}</h2>
                    <a href={gitHubInfos?.page_url} target="blank">
                        GitHub
                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                    </a>
                </TitleContainer>

                <p>{gitHubInfos?.bio}</p>

                <IconContainer>
                    <span>
                        <FontAwesomeIcon icon={faGithub} />
                        {gitHubInfos?.login}
                    </span>
                    {gitHubInfos?.company &&
                        <span>
                            <FontAwesomeIcon icon={faBuilding} />
                            {gitHubInfos?.company}
                        </span>
                    }
                    <span>
                        <FontAwesomeIcon icon={faUserGroup} />
                        {gitHubInfos?.followers} seguidores
                    </span>
                </IconContainer>
            </ContentContainer>
        </TitleCardContainer>
    )
}