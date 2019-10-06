import React, { Component } from 'react'
import MemberItem from './MemberItem'

export class Members extends Component {
    render() {
            return (
                this.props.members.map(mem => (
                    <MemberItem key={mem.email}
                    member={mem}
                    removeMember={this.props.removeMember} />
                ))
            )
    }
}

export default Members
