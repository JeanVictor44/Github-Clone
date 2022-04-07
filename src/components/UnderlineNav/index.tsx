import { RiBookOpenLine as BookIcon } from 'react-icons/ri'
import { FiPackage as PackageIcon } from 'react-icons/fi'
import { AiOutlineStar as StarIcon } from 'react-icons/ai'
import { AiOutlineProject as ProjectIcon } from 'react-icons/ai'
import { RiGitRepositoryLine as RepositoryIcon } from 'react-icons/ri'
import { useState } from 'react'
import { useProfile } from '../../context/Profile'
import { useStarredRepos } from '../../context/StarredRepos'
import { Link } from 'react-router-dom'

type SelectedItems = 'Overview' | 'Repositories' | 'Projects' | 'Packages' | 'Stars'

export const UnderlineNav = () => {
    const selectedItem = 'border-b-2 text-orange-400'
    const [selected, setSelected] = useState<SelectedItems>('Repositories')
    const { public_repos, } = useProfile()
    const { repositorieStarredsAmount } = useStarredRepos()

    return (
        <nav className='border-b'> 
            <ul className='flex justify-center mt-6 text-sm'>
                <li>
                    <Link to='overview' 
                        className={`flex items-center px-4 py-4 ${selected === 'Overview' && selectedItem}`} 
                        onClick={() => setSelected('Overview')}>
                        
                        <BookIcon className='w-4 h-4 mr-1'/>
                        <p>Overview</p>    
                    </Link>
                </li>

                <li>
                    <Link  to='repositories' 
                        className={`flex items-center px-4 py-4 ${selected === 'Repositories' && selectedItem}`} 
                        onClick={() => setSelected('Repositories')}>
                        <RepositoryIcon className='w-4 h-4 mr-1'/>
                        <p className='mr-2'>Repositories</p>
                        <span className='block bg-gray-200 rounded-full px-2'>{public_repos || 0}</span>
                    </Link>
                </li>
                <li>
                    <Link  to='projects' 
                        className={`flex items-center px-4 py-4 ${selected === 'Projects' && selectedItem}`} 
                        onClick={() => setSelected('Projects')}>
                            <ProjectIcon className='w-4 h-4 mr-1'/>
                            <p>Projects</p>
                    
                    </Link>
                </li>
                <li>
                    <Link  to='packages' 
                        className={`flex items-center px-4 py-4 ${selected === 'Packages' && selectedItem}`} 
                        onClick={() => setSelected('Packages')}>
                        
                        <PackageIcon className='w-4 h-4 mr-1'/>
                        <p>Packages</p>
                    
                    </Link>
                </li>
                <li>
                    <Link  to='stars' 
                        className={`flex items-center px-4 py-4 ${selected === 'Stars' && selectedItem}`} 
                        onClick={() => setSelected('Stars')}>

                        <StarIcon className='w-4 h-4 mr-1'/>
                        <p className='mr-2'>Stars</p>
                        <span className='block bg-gray-200 rounded-full px-2'>{repositorieStarredsAmount}</span>

                    </Link>
                </li>
            </ul>
        </nav>
    )
}