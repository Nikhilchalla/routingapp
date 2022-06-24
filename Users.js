import React from "react";
import {useEffect,useState} from 'react'
import axios from "axios";
function Users(){

    let [users,setUsers]=useState([])

    //make api call to get users
    useEffect(()=>{
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(res=>setUsers(res.data))
        // .catch(err=>console.log(err))
        let fetchData= async()=>{
            let res=await axios.get("https://jsonplaceholder.typicode.com/users")
            let userData=res.data
            setUsers(userData)
        }
        fetchData()

    },[])


    return(
        <div className=" container text-center">
            <p className="display-2 text-primary"> Users</p>
            {/* display users data */}
            <table className="table mt-4">
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    </tr>
                    </thead>


                    <tbody>
                        {
                            users.map((userOjc)=><tr key={userOjc.id}>
                            <td>{userOjc.id}</td>
                            <td>{userOjc.Name}</td>
                            <td>{userOjc.username}</td>
                            <td>{userOjc.website}</td>
                            </tr> )
                        }
                    </tbody>
                
            </table>
        </div>
    )
}

export default Users;