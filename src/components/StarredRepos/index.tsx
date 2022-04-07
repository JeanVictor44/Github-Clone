import { useStarredRepos } from '../../context/StarredRepos'
import { AiOutlineStar as StarIcon } from 'react-icons/ai'
import { BiGitRepoForked as ForkIcon } from 'react-icons/bi'
import { numberFormat } from '../../utils/number-format'

export const StarredRepos = () => {
    const { repositories } = useStarredRepos()
    return (
        <main className='flex-1 mr-20 mt-4'>
            <h2 className='mb-1'>Starred repositories</h2>
            {
                repositories.map((repo) => (
                    <div className='py-5 border-b'>
                        <p className='mb-2 text-blue-600 text-xl font-semibold'>{repo.full_name}</p>
                        <p className='mb-3 text-sm w-3/5'>{repo.description}</p>
                        <div className='flex gap-2 text-sm'>
                            { 
                                repo.language && 
                                    
                                    <p>{repo.language}</p>
                            
                            }
                            <div className='flex items-center gap-1'>
                                <StarIcon />    
                                <p>{numberFormat(repo.stargazers_count)}</p>
                            </div>
                            <div className='flex items-center gap-1'>
                                <ForkIcon />
                                <p>{numberFormat(repo.forks)}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </main>
    )
}