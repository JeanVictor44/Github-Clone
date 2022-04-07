import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header'
import { RepositoryList } from './components/RepositoryList';
import { SideProfile } from './components/SideProfile';
import { UnderlineNav } from './components/UnderlineNav';
import { ProfileProvider } from './context/Profile';
import { StarredReposProvider } from './context/StarredRepos';
import { AppRoutes } from './routes';

const App =  () => {  

  return (
    <ProfileProvider>
      <StarredReposProvider>
        <Header />
        
        <BrowserRouter>
            <UnderlineNav />
          <div className='flex flex-col mx-4 md:mx-14 md:flex-row md:items-start'>
            <SideProfile />
            <AppRoutes />
          </div>
          </BrowserRouter>

      </StarredReposProvider>
    </ProfileProvider>
  )
}

export default App;