import React, { useState,useEffect } from "react";
import mailSvg from "../assets/mail.svg";
import manSvg from "../assets/man.svg";
import womanSvg from "../assets/woman.svg";
import manAgeSvg from "../assets/growing-up-man.svg";
import womanAgeSvg from "../assets/growing-up-woman.svg";
import mapSvg from "../assets/map.svg";
import phoneSvg from "../assets/phone.svg";
import padlockSvg from "../assets/padlock.svg";




const Person = ({people,getData,defaultImage}) => {
    const [title,setTitle]=useState("name")
    const [value,setValue]=useState(people[0].name.first)
    const [email,setEmail]=useState([])
    const [table,setTable]=useState([])
console.log(table);


    useEffect(() => {
      setTitle("name")
      setValue(people[0].name.first)
    }, [people])
    


    const addUser = ()=>{
        setEmail([...email,people[0].email])
        if(email.includes(people[0].email)){
            alert("You have already added this person's info")
        }else{
            setTable([...table,[people[0].name.first,people[0].email,people[0].cell,people[0].dob.age]])
        }
    }
    console.log(table);
  return (
    <div className="block">
    <div className="container">
      {
        people.map((item,index)=>{
          return(
            <div key={index}>
          <img src={item.picture.large || defaultImage} alt="random user" className="user-img" />
      <p className="user-title">My {title} is</p>
      <p className="user-value">{value}</p>
      <div className="values-list">
        <button className="icon" data-label="name" >
          <img src={item.gender=="female" ? womanSvg : manSvg} alt="user" id="iconImg" onMouseOver={()=>{setTitle("name")
         setValue(item.name.first)}} />
        </button>
        <button className="icon" data-label="email" >
          <img src={mailSvg} alt="mail" id="iconImg" onMouseOver={()=>{setTitle("email")
         setValue(item.email)}}/>
        </button>
        <button className="icon" data-label="age" >
          <img src={item.gender=="female" ? womanAgeSvg : manAgeSvg} alt="age" id="iconImg" onMouseOver={()=>{setTitle("age")
         setValue(item.dob.age)}} />
        </button>
        <button className="icon" data-label="street" >
          <img src={mapSvg} alt="map" id="iconImg" onMouseOver={()=>{setTitle("street")
         setValue(item.location.street.name)}}/>
        </button>
        <button className="icon" data-label="phone" >
          <img src={phoneSvg} alt="phone" id="iconImg" onMouseOver={()=>{setTitle("phone")
         setValue(item.cell)}}/>
        </button>
        <button className="icon" data-label="password" >
          <img src={padlockSvg} alt="lock" id="iconImg" onMouseOver={()=>{setTitle("password")
         setValue(item.login.password)}}/>
        </button>
      </div>
      <div className="btn-group">
        <button className="btn" type="button" onClick={getData}>
          new user
        </button>
        <button className="btn" type="button" onClick={()=>addUser()}>
          add user
        </button>
      </div>

      <table className="table">
        <thead>
          <tr className="head-tr">
            <th className="th">Firstname</th>
            <th className="th">Email</th>
            <th className="th">Phone</th>
            <th className="th">Age</th>
          </tr>
        </thead>
        <tbody>
          {
                table?.map((item,index)=>{
                    return(
                        <tr key={index}>
                            {item?.map((info,index)=>{
                                return(
                                    <td key={index}>{info}</td>
                                )
                            })}
                        </tr>
                    )
                })
            }
        </tbody>
      </table>
            </div>
          )
        })
      }
    </div>
  </div>
  )
}

export default Person