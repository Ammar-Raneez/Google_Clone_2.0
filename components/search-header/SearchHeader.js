import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MicrophoneIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Avatar from '../Avatar';
import HeaderOptions from './HeaderOptions';

function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef();

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className='sticky top-0 bg-white'>
      <div className='flex w-full p-6 items-center '>
        <Image
          src='/google-logo.png'
          height={40}
          width={120}
          className='cursor-pointer'
          onClick={() => router.push('/')}
          priority={true}
          alt="logo"
        />
        <form className='flex flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
          <input
            ref={searchInputRef}
            type='text'
            className='flex-grow w-full focus:outline-none'
            defaultValue={router.query.term}
          />
          <XMarkIcon
            className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125'
            onClick={() => (searchInputRef.current.value = '')}
          />
          <MicrophoneIcon className='h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer' />
          <MagnifyingGlassIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer' />
          <button hidden type='submit' onClick={search}>
            Search
          </button>
        </form>
        <Avatar className='ml-auto' url='/user-image.jpg' />
      </div>
      <HeaderOptions />
    </header>
  );
}

export default SearchHeader;
