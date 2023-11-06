import UserProfile from '../UserProfile';
import SearchButton from '../SearchButton';
import NewAnime from '@/modul/NewAnime';
import TopCharacters from '@/modul/TopCharacters';

const RightBar = () => {
  return (
    <aside id="logo-sidebar" className="fixed top-0 right-0 z-40 w-64 h-screen transition-transform translate-x-full lg:translate-x-0" aria-label="Sidebar">
      <div className="h-full space-y-5 px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className='flex justify-center'>
          <UserProfile />
        </ul>
        <ul className='flex justify-center'>
          <SearchButton />
        </ul>
        <ul>
          <h3>On-going</h3>
          <NewAnime />
        </ul>
        <ul>
          <h3>Top Characters</h3>
          <TopCharacters />
        </ul>
      </div>
    </aside>
  )
}

export default RightBar
