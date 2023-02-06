import axios from 'axios'
import React from 'react'
import { API } from '../global'

function DeleteBlock({documentId}) {
  const deleteTicket = async () => {
    // const response = await axios.delete(`http://localhost:4000/tickets/${documentId}`)
    const response = await axios.delete(`${API}/tickets/${documentId}`)
    const success = response.status == 200
    if (success) window.location.reload()
  }
  return (
    <div className="delete-block">
      <div className="delete-icon" onClick={deleteTicket}>✖</div>
    </div>
  )
}

export default DeleteBlock