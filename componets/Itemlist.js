import React from 'react'

const Itemlist = ({item}) => {
    console.log(item)
  return (
    <div>
        <ul>
            {item.map((i)=>{return <li>{i.card.info.name}</li>})}
        </ul>

    </div>
  )
}

export default Itemlist
