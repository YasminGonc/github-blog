import { createContext, ReactNode, useEffect, useState } from "react";

interface GitHubData {
    avatar: string;
    name: string;
    page_url: string;
    bio: string;
    login: string;
    company: string;
    followers: string;
}

interface IssuesContent {
    title: string;
    body: string;
    number: number;
}

interface GitHubContextType {
    gitHubInfos: GitHubData | null;
    issuesCount: number;
    issuesContent: IssuesContent[];
}

export const GitHubContext = createContext({} as GitHubContextType);

interface GitHubProviderProps {
    children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
    const [gitHubInfos, setGitHubInfos] = useState<GitHubData | null>(null);
    const [issuesCount, setIssuesCount] = useState(0);
    const [issuesContent, setIssuesContent] = useState<IssuesContent[]>([]);
    
    useEffect(() => {
        fetch('https://api.github.com/users/YasminGonc')
            .then(response => response.json())
            .then(data => {
                const gitHubData: GitHubData = {
                    avatar: data.avatar_url,
                    name: data.name,
                    page_url: data.html_url,
                    bio: data.bio,
                    login: data.login,
                    company: data.company,
                    followers: data.followers,
                }
                setGitHubInfos(gitHubData);
            })
    }, []);

    useEffect(() => {
        fetch('https://api.github.com/search/issues?q=user:YasminGonc')
            .then(response => response.json())
            .then(data => {
                setIssuesCount(data.total_count);
                setIssuesContent(data.items);
                //console.log(data.items)
            });
    }, []);

    console.log(issuesContent[0]);

    return(
        <GitHubContext.Provider value={{ gitHubInfos, issuesCount, issuesContent }}>
            {children}
        </GitHubContext.Provider>
    )
}
