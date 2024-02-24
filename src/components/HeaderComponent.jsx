import { useState } from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';



function HeaderComponent() {

    const [viewComponent, setView] = useState(false)

    function toggleView(){
        setView(!viewComponent)
    }

  return (
    <div className='flex p-5 justify-between'>
        <div className='flex w-32'>
        <img src="../../public/LOGO.png" alt="" />
        </div>
        <div className='flex'>
          <GiHamburgerMenu className='flex size-7'/>   
        </div>
    </div>
    
  );
}

export default HeaderComponent;