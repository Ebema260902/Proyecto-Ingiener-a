import { useEffect, useState } from 'react'

export const useFetchEventsWeek = () => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getData = async () => {
        try {
            const response = await fetch(
                // 'http://127.0.0.1:8000/api/events/eventsWeek'
                'http://jint_backend.test/api/events/eventsWeek'
            )
            const eventsWeek = await response.json()
            setData(eventsWeek)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return {
        eventsWeek: data,
        isLoadingEventsWeek: isLoading,
    }
}
