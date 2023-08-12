
import SalesNavItem from './salesNavItem'
import { useLinks } from '@/app/hooks'


const SalesNav = () => {

    const { salesTabs } = useLinks()

  return <div className='flex gap-8 items-center'>
            {salesTabs.map((item) =>  (<SalesNavItem
                                        key={item.label}
                                        icon={item.icon}
                                        label={item.label}
                                        link={item.link}
                                        />)) }
        </div>
  
  }

export default SalesNav