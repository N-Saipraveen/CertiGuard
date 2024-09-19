import InstaIcon from '../assets/icons/insta.svg'
import XSocial from '../assets/icons/x-social.svg'
import Tiktok from '../assets/icons/tiktok.svg'
import Youtube from '../assets/icons/youtube.svg'
export const Footer = () => {
  return (
    <footer className='py-5 bg-black text-white/60 border-t border-white/20'>
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center ">
            2024 copyright etc......
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <XSocial />
            </li>
            <li><InstaIcon /></li>
            <li> <Tiktok /></li>
            <li> <Youtube /> </li>
          </ul>

        </div>
      </div>
    </footer>
  );
};
