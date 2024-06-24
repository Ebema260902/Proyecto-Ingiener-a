import { useEffect, useState } from "react";

export const useFetchCourses = () =>{
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try{
            const response = await fetch(
                // "http://127.0.0.1:8000/api/courses/all"
                "http://jint_backend.test/api/courses/all"
            );
            const courses = await response.json();
            setData(courses);
            setIsLoading(false);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    return{
        courses: data,
        isLoadingCourses: isLoading,
    }
}