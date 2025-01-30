import React from 'react'
import Application from './Hooks'

const Alert  = (props) => {
  return (
    <div>
        {props.alert && (
        <div class={`alert alert-${props.alert.type} alert-dismissible fade show`}>
  <strong>{props.alert.type}</strong>{props.alert.message}
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
)}</div>
  )  }
export default Alert
