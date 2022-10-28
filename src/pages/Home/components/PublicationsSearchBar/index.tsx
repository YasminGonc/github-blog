import { useContext } from "react";
import { GitHubContext } from "../../../../context/GitHubContext";
import { PublicationsSearchBarContainer, SearchInput, TitleContainer } from "./styles";

export function PublicationsSearchBar() {
    const { issuesCount } = useContext(GitHubContext);

    return(
        <PublicationsSearchBarContainer>
            <TitleContainer>
                <h2>Publicações</h2>
                {issuesCount == 1 ? <span>{issuesCount} publicação</span> : <span>{issuesCount} publicações</span>}
            </TitleContainer>

            <form action="">
                <SearchInput type="text" placeholder="Buscar conteúdo" />
            </form>
        </PublicationsSearchBarContainer>
    )
}