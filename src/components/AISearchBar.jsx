import React, { useRef } from 'react'
import { LANG_OPTIONS } from '../utils/constants'
import { changeLanguage } from '../redux/langSlice';
import { useDispatch, useSelector } from 'react-redux';
import { LANGUAGES } from '../utils/langConstants';

const AISearchBar = () => {
    const dispatch = useDispatch();
    const langRef = useRef();
    const selectedLang = useSelector(state => state?.lang?.language)
    return (
        <>
        <div className='flex justify-end px-8 mt-8 '>
            <select className='bg-gray-900 text-white rounded-md' ref={langRef} 
            onChange={()=> {dispatch(changeLanguage(langRef.current.value))}}>
                {
                    LANG_OPTIONS.map((lang)=>{
                       return <option key={lang.identifier} value={lang.identifier}>{lang.name}</option> 
                    })
                }
            </select>
        </div>
        <div className="bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-4">{LANGUAGES[selectedLang].h1}</h1>
        <h2 className="text-2xl mb-8">{LANGUAGES[selectedLang].h2}</h2>
  
        <div className="flex flex-col sm:flex-row items-center">
          <input className="min-w-[320px] text-center opacity-60 bg-transparent border-b-2 border-white py-2 px-4 mr-4 mb-4 sm:mb-0 focus:outline-none focus:border-blue-500 placeholder-white" 
          placeholder={LANGUAGES[selectedLang].inpTxt} />
          <button className="bg-blue-500 hover:bg-blue-600 py-2 px-6 rounded-lg text-lg font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          {LANGUAGES[selectedLang].search}</button>
        </div>
      </div>
        </>
    )
  }
  

export default AISearchBar