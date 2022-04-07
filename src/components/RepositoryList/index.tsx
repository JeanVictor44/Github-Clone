import { AiFillCaretDown as ArrowDownIcon }  from 'react-icons/ai'
import { RiGitRepositoryLine as RepositoryIcon } from 'react-icons/ri'
import { LANGUAGE_COLORS } from '../../constants/language-colors'
 import { useRepositories } from '../../hooks/useRepositories'

export const RepositoryList = () => {
    const repositories = useRepositories()
    return (
        <main className='flex-1 mr-20'>
            <div className='py-4 border-b flex gap-1'>
                <input type='text' className='flex-1 border pl-2 py-1 mr-3 rounded-md' placeholder='Find a repository...' />
                <button className='flex items-center rounded-md bg-gray-100 px-5 border text-sm'>
                    <span className='mr-2 text-sm'>Type</span>
                    <ArrowDownIcon className='w-2 h-2'/>
                </button>
                <button className='flex items-center bg-gray-100 px-5 border rounded-md text-sm'>
                    <span className='mr-2 text-sm'>Language</span>
                    <ArrowDownIcon className='w-2 h-2'/>

                </button>
                <button className='flex items-center rounded-md bg-gray-100 px-5 border text-sm'>
                    <span className='mr-2 text-sm'>Sort</span>
                    <ArrowDownIcon className='w-2 h-2'/>
                </button>
                <button className='bg-green-500 rounded-md flex items-center gap-1 px-4'>
                    <RepositoryIcon className='text-white'/>
                    <span className='text-white text-sm'>New</span>
                </button>
            </div>
            {
                repositories.map((repository) => ( 
                    <div className='py-5 border-b'>
                        <div className='flex gap-2 items-center mb-2'>
                            <h2 className='text-blue-600 text-xl font-semibold'>{repository.name}</h2>
                            <span className='text-sm text-gray-500 border px-2 rounded-full'>{repository.private ? 'Private' : 'Public'}</span>
                        </div>
                        <p className='text-gray-500 text-sm w-72 mb-4'>{repository.description}</p>
                        <div className='flex gap-2'>
                            <div className='flex gap-2 items-center'>
                                <div className='w-3 h-3 rounded-full' style={{backgroundColor:`${LANGUAGE_COLORS[repository.language]}`}}></div>
                                <p className='text-gray-500 text-sm'>{repository.language}</p>
                            </div>
                            {/* License */}
                            {/* Update */}
                        </div>
                    </div>
                ))
            }
        </main>
    )
}