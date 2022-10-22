import { HeaderCard } from "./components/HeaderCard";
import { PostConatiner, TextContainer } from "./styles";

export function Post() {
    return(
        <PostConatiner>
            <HeaderCard />
            <TextContainer>
                <p>Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
                </p>
            </TextContainer>
        </PostConatiner>
    )
}