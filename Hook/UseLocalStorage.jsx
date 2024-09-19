import { useEffect, useState } from "react"

export function useLocalStorage(key,initialData) {
    const [data,setData] = useState(initialData)    

    useEffect(()=>{
        const existingData = JSON.parse(localStorage.getItem(key))
        if (existingData) {
            setData(existingData)            
        } else {
            
            localStorage.setItem(key,JSON.stringify(initialData))
        }
    },[])

    const updateLocalStorage = (newData)=>{
        if (typeof newData==="function") {
            const updateData = newData(data)
            setData(updateData)
            localStorage.setItem(key,JSON.stringify(updateData))
            
        }else{
            setData(newData)
            localStorage.setItem(key,JSON.stringify(newData))
        }
    }
    return [data,updateLocalStorage]
}