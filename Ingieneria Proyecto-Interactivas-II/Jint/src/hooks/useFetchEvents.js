import { useEffect, useState } from "react";

export const useFetchEvents = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getData = async () => {
        try {
            const response = await fetch(
                // "http://127.0.0.1:8000/api/events/all"
                "http://jint_backend.test/api/events/all"
            );
            //const data = await response.json();
            const events = await response.json();
            setData(events);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
        isLoading,
    };
};
