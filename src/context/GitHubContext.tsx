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

interface GitHubContextType {
    gitHubInfos: GitHubData | null;
}

export const GitHubContext = createContext({} as GitHubContextType);

interface GitHubProviderProps {
    children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
    const [gitHubInfos, setGitHubInfos] = useState<GitHubData | null>(null);
    
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

    return(
        <GitHubContext.Provider value={{ gitHubInfos }}>
            {children}
        </GitHubContext.Provider>
    )
}
