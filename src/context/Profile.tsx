import { createContext, PropsWithChildren, useState, useEffect, useMemo, useCallback, useContext} from "react";

type ProfileState = {
    avatar_url: string,
    location: string,
    blog: string,
    public_repos: number,
    followers: number,
    following: number,
    starred_url:string, 
    repos_url: string
}
type ProfileContext = ProfileState & {
    profileName: string,
    changeProfileName: (profileName: string) => void
}

const ProfileContext = createContext<ProfileContext | null>(null)

export const ProfileProvider = ({children}:PropsWithChildren<unknown>) => {
    const [ profileName, setProfileName ] = useState('JeanVictor44')
    const [ profileInfos, setProfileInfos ] = useState<ProfileState>({} as ProfileState)

    const changeProfileName = useCallback((profileName: string) => {
        setProfileName(profileName)
    },[])

    const value = useMemo(() => ({
        profileName,
        ...profileInfos,
        changeProfileName
    }), [profileName, profileInfos, changeProfileName])
    
    useEffect(() => {
        fetch(`https://api.github.com/users/${profileName}`)
            .then((response) => response.json())
            .then(data => setProfileInfos(data))
    }, [profileName])


    return (
        <ProfileContext.Provider value={value}>
            { children }
        </ProfileContext.Provider>
    )
} 
export const useProfile = () => {
    const context = useContext(ProfileContext)
    
    if(!context){
        throw new Error('useProfile must be used within a ProfileProvider')
    }

    return context    
}