import { useContext } from "react";
import { GitHubContext } from "../../../../context/GitHubContext";
import { PostContainer, PostListContainer, TextContainer, TitleContainer } from "./styles";

export function PostList() {
    const { issuesContent } = useContext(GitHubContext);

    return (
        <PostListContainer>
            {issuesContent.map((issue, index) => {
                return (
                    <PostContainer key={index}>
                        <TitleContainer>
                            <h2>{issue.title}</h2>
                            <span>Há 1 dia</span>
                        </TitleContainer>
                        <TextContainer>
                            <p>{issue.body}</p>
                        </TextContainer>
                    </PostContainer>
                )
            })}
        </PostListContainer>
    )
}