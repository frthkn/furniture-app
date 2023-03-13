import React, {useState} from 'react'
import { useRouter } from 'next/router';
import en from "../../pages/locales/en/header"
import tr from "../../pages/locales/tr/header"



const Dil = () => {
    const router = useRouter();
    const {locale}= router;
    const t = locale === 'en' ? en : tr;
    const handleLocaleChange = (e) => {
        const locale = e.target.value;
        router.push("/","/", {locale})
        


    };
  return (
  
    <select value={locale} onChange={handleLocaleChange} className=" bg-neutral-100 text-center text-neutral-600 dark:bg-black dark:text-neutral-200">
        <option value='tr'>TR</option>
        <option value='en'>EN</option>

    </select>
    
  
  )
}

export default Dil;