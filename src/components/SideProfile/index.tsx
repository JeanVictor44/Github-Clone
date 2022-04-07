import { useProfile } from '../../context/Profile'
import { IoMdPeople as PeopleIcon } from 'react-icons/io'
import { HiOutlineLocationMarker as LocationIcon } from 'react-icons/hi'
import { FiLink as LinkIcon } from 'react-icons/fi'

export const SideProfile = () => {
    const { avatar_url: profileImageUrl, profileName, followers, following, location, blog} = useProfile()
    return (
        <aside className='mx-1 md:mx-8 md:self-start '>
            
            <div className='flex md:flex-col md:items-start items-center mt-2 md:gap-0 gap-2 md:mb-0 mb-2'>
                <img src={profileImageUrl} 
                     alt='User' 
                     className='md:w-72 w-32 rounded-full border-2 border-gray-400 cursor-pointer static md:relative md:bottom-10'/>
                <p className='text-gray-400 text-xl mb-2'>{profileName}</p>
            </div>
            <button className='mb-4 md:mb-2 bg-gray-100 border border-gray-200 px-10 w-full py-1 text-sm rounded-2'>Edit profile</button>
            <div className='flex mb-2 md:mb-6'>
                <div className='flex items-center mr-4'>
                    <PeopleIcon />
                    <span className='text-sm'>{followers || 0} followers</span>
                </div>
                <span className='text-sm'>{following} following</span>

            </div>
            <div className='flex items-center hidden md:block'>
                <LocationIcon className='mr-2'/>
                <span className='text-sm'>{location}</span>
            </div>
            <div className='flex items-center'>
                <LinkIcon className='mr-2'/>
                <a className='text-sm' href={blog}>{blog && blog.slice(0, 40)}...</a>
            </div>
        </aside>
    )
}