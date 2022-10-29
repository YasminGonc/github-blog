import { useContext } from "react";
import { GitHubContext } from "../../context/GitHubContext";
import { HeaderCard } from "./components/HeaderCard";
import { PostConatiner, TextContainer } from "./styles";
import ReactMarkdown from "react-markdown";

export function Post() {
    const { issuesContent, postIndex } = useContext(GitHubContext);
    return(
        <PostConatiner>
            <HeaderCard />
            <TextContainer>
                <ReactMarkdown>
                    {issuesContent[postIndex].body}
                </ReactMarkdown>
            </TextContainer>
        </PostConatiner>
    )
}