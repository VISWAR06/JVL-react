import React from "react";
import { useParams } from "react-router-dom";
export default function User(){
    const {id}=useParams()
    return<>
    <h1>which user u are?</h1>
    <p>
        i am user<b>{id}</b>
    </p>
    </>
}