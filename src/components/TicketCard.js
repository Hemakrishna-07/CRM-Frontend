import React from 'react'
import AvatarDisplay from './AvatarDisplay'
import StatusDisplay from './StatusDisplay'
import PriorityDisplay from './PriorityDisplay'
import ProgressDisplay from './ProgressDisplay'
import DeleteBlock from './DeleteBlock'
import { Link } from 'react-router-dom'

function TicketCard({ color, ticket }) {
  return (
    <div className='ticket-card'>     
      <div className='ticket-color' style={{ backgroundColor: color }}></div>
      <Link to={`/ticket/${ticket.documentId}`} id='link'>
        <h3>{ticket.title}</h3>
        <AvatarDisplay ticket={ticket} />
        <StatusDisplay status={ticket.status} />
        <PriorityDisplay priority={ticket.priority} />
        <ProgressDisplay progress={ticket.progress} />
      </Link>
      <DeleteBlock documentId={ticket.documentId} />
    </div>
  )
}

export default TicketCard