import { 
    Routes,
    Route,
    Navigate
} from 'react-router-dom'
import { RepositoryList } from '../components/RepositoryList'
import { StarredRepos } from '../components/StarredRepos'

export const AppRoutes = () => {
    return (
        <Routes>
            <Route index element={<Navigate to='/repositories'/>}/> 
            <Route path='/repositories' element={<RepositoryList />} />
            <Route path='/stars' element={<StarredRepos/>}/> 
        </Routes>
    )
}