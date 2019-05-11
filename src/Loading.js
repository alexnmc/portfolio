import React from 'react'
import ReactLoading from "react-loading"


const Loading = ({type, color}) => {
    
  return(
    <div className = "loading">
      <ReactLoading  type={'spin'} color={'white'} height={'25pt'} width={'25pt'}/>
    </div>
  )
}




export default Loading