import React from 'react'

export default function Alertmessage(props) {
  return (

 
props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
  <b>{props.alert.type}</b>:{props.alert.message}
   {/* <button type="button" class="close" data-dismiss="alert" aria-label="Close"></button> */}
</div>

  )   
 
}
