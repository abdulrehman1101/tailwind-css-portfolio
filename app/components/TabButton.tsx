import React from 'react'



interface TabbuttonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode
}
const TabButton = ({ active, selectTab, children}: TabbuttonProps ) => {
    const ButtonClasses = active ? 'text-white text-[#ADB7bE] hover:border-b' : 'text-white text-[#ADB7bE] hover:border-b'
  return (
    <button onClick={selectTab}>
         <p className={`mr-3 font-semibold hover:text-white ${ButtonClasses}`}>
            {children}
         </p>
    </button>
  )
}

export default TabButton;