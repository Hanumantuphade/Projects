import React from 'react'
import PageSection from './PageSection'
import codeimg from '../assets/code.jpg'


const DevAPI = () => {
  return (
    <PageSection name="developer API" title="Developer API" subtitle="Angels that with clasp dreams nepenthe on this of is. Said and a my the.">
      <div className='flex flex-col lg:flex-row items-center justify-center gap-12'>
        {/* left */}
        <div className='flex flex-col justify-center items-center gap-4 w-full lg:w-[450px] p-8  bg-gray-900 rounded-lg'>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue '> Whom madam songs faster get as followed sought many leave.</p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue '> Whom madam songs faster get as followed sought many leave.</p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue '> Whom madam songs faster get as followed sought many leave.</p>
          <p className='border-l-4 pl-4 odd:border-thOrange even:border-thBlue '> Whom madam songs faster get as followed sought many leave.</p>
        </div>


        {/* Right */}
        <div className='w-full lg:w-[450px] lg:rotate-6 duration-300 hover:rotate-0'>
        <img src={codeimg} alt="code_img" className='rounded-lg shadow-lg cursor-pointer shadow-thBlue' />

        </div>

      </div>
    </PageSection>
  )
}

export default DevAPI
