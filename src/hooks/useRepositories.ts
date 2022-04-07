import { useEffect, useState } from "react"
import { Repository } from "../common/types"
import { useProfile } from "../context/Profile"

export const useRepositories = () => {
    const { repos_url } = useProfile()
    const [repositories, setRepositories ] = useState<Repository[]>([]) 

    useEffect(() => {
        const getRepositories = async() => {
            const repos = await (await fetch(repos_url)).json()
            setRepositories(repos)
        }
        getRepositories()
    }, [repos_url])

    return repositories
}