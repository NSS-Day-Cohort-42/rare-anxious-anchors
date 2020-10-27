import React, { useContext, useEffect, useState } from "react"
import { commentContext } from "./commentProvider"

return (
    <section className="animal">
          <button onClick={()=> history.push("/")} >x</button>
        <h3 className="animal__name">{animal.name}</h3>
        <div className="animal__breed">Breed: {animal.breed}</div>
        <div className="animal__location">Location: {animal.address}</div>
        <div className="animal__owner">Customer: {customer.name}</div>
        <div className="animal__treatment">Status: {animal.status}</div>

      

 
    </section>
)
