import Image from 'next/image';

function Avatar({ url, className }) {
  return (
    <p className={className}>
      <Image
        className="h-10 rounded-full cursor-pointer transition duration-150 transform hover:scale-110"
        src={url}
        alt="profile picture"
        height={35}
        width={35}
      />
    </p>
  );
}

export default Avatar;
