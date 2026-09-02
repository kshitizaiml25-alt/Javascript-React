import React from 'react'
import { useEffect } from 'react'

function Github() {

    const [data, setData] = React.useState(null)
    useEffect(() => {
        fetch('https://api.github.com/users/kshitizaiml25-alt')
            .then((response) => response.json())
            .then((data) => 
            {console.log(data)
            setData(data)
            })
    }, [])
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github Public Repositories: {data.public_repos}
       <img src={data.avatar_url} alt="Github Avatar" className='rounded-full w-32 h-32 mx-auto mt-4'/>
    </div>
  )
}
export default Github