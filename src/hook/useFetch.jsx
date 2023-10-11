import React, { useEffect, useState } from 'react';
import axios from 'axios';

const url = "http://localhost:4000/api/quiz";

 const useFetch = () => {
    const [loader,setloader] = useState(true);
    const [quiz,setQuiz] =useState([]);

    useEffect(()=> {
        axios.get(url).then(res=> {
            const data = res.data;
            setQuiz(data);
            setloader (false);
        })
    },[]);

    return {loader,quiz};
 }

 export default useFetch;