import React from 'react'

function Cards({username , post}) {
  return (
    <div className="flex flex-col items-center gap-6 p-7 md:flex-row md:gap-8 rounded-2xl">
  <div>
    <img className="size-48 shadow-xl rounded-md" alt="" src="https://images.pexels.com/photos/15670747/pexels-photo-15670747.jpeg" />
  </div>
  <div className="flex">
    <span className="text-2xl font-medium">Class Warfare</span>
    <span className="font-medium text-sky-500">{username || "Kshitiz"}</span>
    <span className="flex gap">
      <span>{post || "Assinged"}</span>
      <span>·</span>
      <span>2025</span>
    </span>
  </div>
      </div>
  )
}

export default Cards        