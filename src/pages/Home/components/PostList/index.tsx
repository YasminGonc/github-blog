import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { GitHubContext } from "../../../../context/GitHubContext";
import { PostContainer, PostListContainer, TextContainer, TitleContainer } from "./styles";

export function PostList() {
    const { issuesContent, handlePostIndex, handlePublishedDateRelativeToNow } = useContext(GitHubContext);
    
    const navigate = useNavigate();

    function handleNavigation(index: number) {
        navigate(`/post/${index + 1}`);
        handlePostIndex(index);
    }

    return (
        <PostListContainer>
            {issuesContent.map((issue, index) => {
                return (
                    <PostContainer key={index} onClick={() => handleNavigation(index)}>
                        <TitleContainer>
                            <h2>{issue.title}</h2>
                            <span>{handlePublishedDateRelativeToNow(issue.created_at)}</span>
                        </TitleContainer>
                        <TextContainer>
                            <ReactMarkdown>
                                {issue.body}
                            </ReactMarkdown>
                        </TextContainer>
                    </PostContainer>
                )
            })}
        </PostListContainer>
    )
}