import React from 'react'

let user = {
    "username" : "Estre",
    "email" : "estre@host.com"
}

export default function ComponenteDos({phone}) {
  return (
    <>
    <p>User name: {user.username}</p>
    <p>email: {user.email}</p>
    <p>phone: {phone}</p>
    </>
  )
}
