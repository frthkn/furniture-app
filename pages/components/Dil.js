import React, {useState} from 'react'
import { useRouter } from 'next/router';



const Dil = () => {
    const router = useRouter();
    const [locale, setLocale]= useState(router.locale || 'tr');
    const handleLocaleChange = (e) => {
        const newLocale = e.target.value;
        setLocale(newLocale);
        const currenPath = router.pathname;
        const currentQuery = router.query;
        router.push(currenPath, currenPath, {locale: newLocale, ...currentQuery});

    };
  return (
  
    <select value={locale} onChange={handleLocaleChange} className=' bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200'>
        <option value='tr'>TR</option>
        <option value='en'>EN</option>

    </select>
    
  
  )
}

export default Dil;