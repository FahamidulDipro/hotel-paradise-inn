import { useEffect, useState } from "react";

const useLoadData = ()=>{
    const [rooms,setRooms] = useState([]);
    useEffect(()=>{
        fetch('data.json').then(res=>res.json()).then(data=>setRooms(data));
    },[])
    return [rooms, setRooms];
}
export default useLoadData;