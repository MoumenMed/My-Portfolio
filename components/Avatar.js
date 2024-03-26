
import Image from "next/image";


const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none' >
    <Image src={`/avatar2.webp`} width={737} height={678} alt="" className='translate-z-0 bulb ' />
  </div>;
};

export default Avatar;
