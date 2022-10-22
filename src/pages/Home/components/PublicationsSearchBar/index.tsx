import { PublicationsSearchBarContainer, SearchInput, TitleContainer } from "./styles";

export function PublicationsSearchBar() {
    return(
        <PublicationsSearchBarContainer>
            <TitleContainer>
                <h2>Publicações</h2>
                <span>6 publicações</span>
            </TitleContainer>

            <form action="">
                <SearchInput type="text" placeholder="Buscar conteúdo" />
            </form>
        </PublicationsSearchBarContainer>
    )
}