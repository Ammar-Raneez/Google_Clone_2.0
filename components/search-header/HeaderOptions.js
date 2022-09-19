import {
  EllipsisVerticalIcon,
  MapIcon,
  NewspaperIcon,
  CameraIcon,
  PlayIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import HeaderOption from './HeaderOption';

function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700 justify-evenly text-sm lg:text-base lg:justify-start lg:space-x-36 lg:pl-52 border-b'>
      <div className='flex space-x-4'>
        <HeaderOption Icon={MagnifyingGlassIcon} title='All' selected />
        <HeaderOption Icon={CameraIcon} title='Images' />
        <HeaderOption Icon={PlayIcon} title='Videos' />
        <HeaderOption Icon={NewspaperIcon} title='News' />
        <HeaderOption Icon={MapIcon} title='Maps' />
        <HeaderOption Icon={EllipsisVerticalIcon} title='More' />
      </div>

      <div className='flex space-x-4'>
        <p className='link'>Setting</p>
        <p className='link'>Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
