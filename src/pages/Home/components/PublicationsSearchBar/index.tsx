import { useContext } from "react";
import { useForm } from "react-hook-form";
import { GitHubContext } from "../../../../context/GitHubContext";
import { PublicationsSearchBarContainer, SearchInput, TitleContainer } from "./styles";

export function PublicationsSearchBar() {
    const { issuesCount, fetchIssues } = useContext(GitHubContext);

    const { register, getValues } = useForm();

    function handleInputValueChange() {
        const inputValue = getValues('query');
        fetchIssues(inputValue);
    }
    
    return (
        <PublicationsSearchBarContainer>
            <TitleContainer>
                <h2>Publicações</h2>
                {issuesCount == 1 ? <span>{issuesCount} publicação</span> : <span>{issuesCount} publicações</span>}
            </TitleContainer>

            <form action="">
                <SearchInput
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query', {
                        onChange: () => handleInputValueChange()
                    })}
                />
            </form>
        </PublicationsSearchBarContainer>
    )
}