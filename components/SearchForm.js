import { useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { MicrophoneIcon } from '@heroicons/react/24/solid';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function SearchForm() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <form className="flex flex-col items-center mt-44 flex-grow">
      <Image
        alt="logo"
        src="/google-logo.png"
        width={300}
        height={100}
        priority={true}
      />

      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <MagnifyingGlassIcon className="h-5 mr-3 text-gray-500" />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow focus:outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <button onClick={search} className="btn">
          Google Seach
        </button>
        <button onClick={search} className="btn">
          {'I\'m Feeling Lucky'}
        </button>
      </div>
    </form>
  )
}

export default SearchForm;
