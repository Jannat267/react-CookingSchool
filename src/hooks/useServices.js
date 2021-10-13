import { useEffect } from "react";
import { useState } from "react";
// hook for services
const useService=()=>{
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => {
                setServices(data);   
            });
    }, []);
    // return value of hook
    return [services]
}
export default useService;