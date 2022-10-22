import { PostList } from "./components/PostList";
import { PublicationsSearchBar } from "./components/PublicationsSearchBar";
import { TitleCard } from "./components/TitleCard";
import { HomeContainer } from "./styles";

export function Home() {
    return(
        <HomeContainer>
            <TitleCard />
            <PublicationsSearchBar />
            <PostList />

        </HomeContainer>
    )
}