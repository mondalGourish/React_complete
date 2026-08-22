import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const[userData, setUserData] = useState([])
  const[index, setIndex] = useState(1)

  const getData = async()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=14`)
    setUserData(response.data)
    console.log(response.data)  
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){
      return <div key={idx}>
        <a href={elem.url} target='_blank'>
          <div className='overflow-hidden h-40 w-44'>
            <img src={elem.download_url} className='h-full w-full object-cover rounded-xl'/>
          </div>
          <h2 className='font-bold text-lg'>{elem.author}</h2>
          </a>
      </div>
    })
  }
  return (
    <div className='bg-black text-white h-screen p-8 overflow-auto' id="right">
          <div className='flex flex-wrap gap-4 p-2 h-[80%]'>
            {printUserData}
          </div>
        <div className='flex justify-center items-center p-4 gap-10'>
          <button className='bg-amber-500 text-black text-xs rounded-2xl px-6 py-4 font-semibold cursor-pointer active:scale-95'
          style={{ opacity: index == 1 ? 0.6 : 1 }}
          onClick={()=>{
            if(index>1){
              setIndex(index-1)
              setUserData([])
            }
          }}
          >
          Prev
          </button>
          <h4>{index}</h4>
          <button className='bg-amber-500 text-black text-xs rounded-2xl px-6 py-4 font-semibold cursor-pointer active:scale-95'
          onClick={()=>{
            setUserData([])

            setIndex(index+1)
          }}
          >
          Next</button>

        </div>
    </div>
  )
}

export default App
