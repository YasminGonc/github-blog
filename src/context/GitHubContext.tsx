import axios from "axios";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
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

interface IssuesReturn {
    total_count: number;
    items: any;
}

interface IssuesContent {
    title: string;
    body: string;
    number: number;
    html_url: string;
    created_at: string;
    comments: number;
}

interface GitHubContextType {
    gitHubInfos: GitHubData | null;
    issuesCount: number;
    issuesContent: IssuesContent[];
    postIndex: number;
    handlePostIndex: (index: number) => void;
    handlePublishedDateRelativeToNow: (date: string) => string;
    fetchIssues: (query?: string) => Promise<void>;
}

export const GitHubContext = createContext({} as GitHubContextType);

interface GitHubProviderProps {
    children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
    const [gitHubInfos, setGitHubInfos] = useState<GitHubData | null>(null);
    const [issuesCount, setIssuesCount] = useState(0);
    const [issuesContent, setIssuesContent] = useState<IssuesContent[]>([]);
    const [postIndex, setPostIndex] = useState<number>(0);

    async function fetchIssues(query?: string) {
        if (!query) {
            const response = await axios.get(`https://api.github.com/search/issues?q=user:YasminGonc`);

            setIssuesCount(response.data.total_count)
            setIssuesContent(response.data.items);
        }
        else {
            const response = await axios.get(`https://api.github.com/search/issues?q=user:YasminGonc%20${query}`);

            setIssuesCount(response.data.total_count)
            setIssuesContent(response.data.items);
        }

    }

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
        fetchIssues();
    }, []);

    function handlePostIndex(index: number) {
        setPostIndex(index);
    }

    function handlePublishedDateRelativeToNow(date: string) {
        const transformStringToDate = new Date(date);

        const publishedDateRelativeToNow = formatDistanceToNow(transformStringToDate, {
            locale: ptBR,
            addSuffix: true,
        });

        return publishedDateRelativeToNow;
    }

    return (
        <GitHubContext.Provider value={{ gitHubInfos, issuesCount, issuesContent, postIndex, handlePostIndex, handlePublishedDateRelativeToNow, fetchIssues }}>
            {children}
        </GitHubContext.Provider>
    )
}
