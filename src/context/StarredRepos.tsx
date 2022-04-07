import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react"
import { Repository } from "../common/types"
import { useProfile } from "./Profile"

type StarredReposContext = {
    repositories: Repository[],
    repositorieStarredsAmount?: number
}

const StarredReposContext = createContext<StarredReposContext | null>(null)

export const StarredReposProvider = ({children}: PropsWithChildren<unknown>) => {
    const { starred_url, profileName} = useProfile()
    const [repositories, setRepositories ] = useState([] as Repository[])

    useEffect(() => {
        const getStarredRepos = async() => {
            const newStarredUrl = starred_url.split('{')[0]
            const repos = await (await fetch(newStarredUrl)).json()
            setRepositories(repos)
        }

        if(starred_url){
            getStarredRepos()
        }
    },[starred_url])


    const value = useMemo(() => ({
        repositories,
        repositorieStarredsAmount: repositories.length
    }), [repositories])

    return (
        <StarredReposContext.Provider value={value}>
            {children}
        </StarredReposContext.Provider>
    )
} 

export const useStarredRepos = () => {
    const context = useContext(StarredReposContext)
    if(!context){
        throw new Error('useStarredRepos must be used within a StarredReposProvider')
    }
    return context
}