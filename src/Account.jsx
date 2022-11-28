import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createUser, deleteUser } from './reducer'
const Account = () => { 

    const dispatch = useDispatch()
    const accounts = useSelector(state => state)
    console.log(accounts)

    return (
        <>
            <h1>This is the count: { accounts.length }</h1>
            <label htmlFor="name">Name</label>
            <input id='name' type="text" />
            <label htmlFor="age">Age</label>
            <input id='age' type="number" />
            <button onClick={() => dispatch(createUser({name: 'John Doe', age: accounts.arr.length}))} >Create</button>
            <button onClick={() => dispatch(deleteUser())} >Delete</button>
        </>
    )

}

export default Account
