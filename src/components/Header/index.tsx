import { FaGithub as GithubLogo }  from 'react-icons/fa'
import { AiOutlineBell as BellIcon }  from 'react-icons/ai'
import { AiOutlinePlus as PlusIcon }  from 'react-icons/ai'
import { AiFillCaretDown as ArrowDownIcon }  from 'react-icons/ai'
import { VscThreeBars as BarsIcon }  from 'react-icons/vsc'
import { useProfile } from '../../context/Profile'
import { useState } from 'react'

export const Header = () => {
    const { avatar_url, changeProfileName, profileName} = useProfile()
    const [isNavbarActive, setIsNavbarActive] = useState(true)
    
    const handleChangeProfileName = (ev: React.ChangeEvent<HTMLInputElement>) => {
        changeProfileName(ev.target.value)
        if(!profileName){
            changeProfileName('JeanVictor44')
        }
    }
    return (
        <header className='flex justify-between bg-gray-800 h-16 px-8 items-center'>
            <div className='block md:hidden cursor-pointer'>
                <BarsIcon className='text-white text-3xl' onClick={() => setIsNavbarActive(navbarState => !navbarState)}/>
            </div>
            <div className='flex items-center'>
                <GithubLogo className='w-8 h-8 mr-4 text-white'/>

                <div className={` ${isNavbarActive ? 'flex' : 'hidden'} items-center flex-col md:flex-row md:flex md:static absolute top-12 left-0 md:bg-transparent bg-gray-800 w-full px-4 md:px-0  py-4 md:py-0`}>
                    <input 
                        type='text' 
                        placeholder='Search or jump to...' 
                        onChange={handleChangeProfileName} 
                        className='block border border-solid border-gray-600 bg-transparent pl-4 text-sm py-1 md:w-96 w-full rounded-lg focus:outline-none focus:bg-white text-gray-600 '/>

                    <nav className="md:ml-5 w-full">
                        <ul className='flex flex-col md:flex-row md:items-center text-white text-sm divide-y md:divide-y-0'>

                            <li className='mr-4 hover:text-gray-400 py-2'>
                                <a href='#' >Pull request</a>
                            </li>

                            <li className='mr-4 hover:text-gray-400 py-2'>
                                <a href='#'>Issues</a>
                            </li>

                            <li className='mr-4 hover:text-gray-400 py-2'>
                                <a href='#'>Marketplace</a>
                            </li>

                            <li className='hover:text-gray-400 py-2'>
                                <a href='#'>Explore</a>
                            </li>

                            <li className='hover:text-gray-400 py-2 flex gap-2 items-center md:hidden'>
                                <img src={avatar_url} className='w-6 h-6 rounded-full'/>
                                <span>{profileName}</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            
            <div className='flex items-center'>
                <BellIcon className='text-white w-5 h-5 mr-4 cursor-pointer hover:text-gray-400'/>
                <div className='group hidden md:flex items-center cursor-pointer mr-4 '>
                    <PlusIcon className='text-white w-5 h-5 group-hover:text-gray-400'/>
                    <ArrowDownIcon className='text-white w-3 h-3 text-white group-hover:text-gray-400'/>
                </div>
                <div className='group hidden md:flex items-center cursor-pointer mr-4'>
                    <img src={avatar_url} className='w-6 h-6 rounded-full'/>
                    <ArrowDownIcon className='text-white w-3 h-3 text-white group-hover:text-gray-400'/>
                </div>
            </div>
        </header>
    )
}