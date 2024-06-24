import { Card } from '../components/Card'
import { Filter } from '../components/Filter'
import { Search } from '../components/Search'
import { useFetchEvents } from '../hooks/useFetchEvents'
import { useFetchCategories } from '../hooks/useFetchCategories' 
import { useFetchTags } from '../hooks/useFetchTags'
import { SearchIcon } from '../components/Icons/SearchIcon'
import { useState, useEffect } from 'react'

export function TaskPage() {
    const { categories, isLoadingCategories } = useFetchCategories();
    let { data, isLoading } = useFetchEvents();
    const { tags, isLoadingTags } = useFetchTags(); 

    //testing
    const [events, setEvents] = useState(data);

    useEffect(() => {
        setEvents(data);
    }, [isLoading])

    const createTask = (items) => {
        return items.map((item) => <Card
            key={item.id} 
            id={item.id} 
            title={item.name}
            date={item.scheduled_at}
            img={item.image}
            time={item.time}
            />
        )
    }

    const createFilter = (data, title, name) => {
        if (data && data.length > 0) {
            return <Filter title={title} data={data} name={name}/>;
        }
    }

    const eventsSearch = async (e) => {
        e.preventDefault();

        let search_input = e.target.search_input.value;
        if (search_input === '') {
            search_input = 'null';
        }
        const category_id = e.target.category_id.value;
        const tag_id = e.target.tag_id.value;

        try {
            const response = await fetch(
                // `http://127.0.0.1:8000/api/search/event/${search_input}/${category_id}/${tag_id}`
                `http://jint_backend.test/api/search/event/${search_input}/${category_id}/${tag_id}`
            );

            const dataSearched = await response.json();
            console.log(dataSearched)
            if(dataSearched !== null){
                setEvents(dataSearched);
            }
            
        } catch (error) {
            console.log(error);
        }
    }
 
    return (
        <section className="xl:ml-[15rem] p-4">
            <h2 className="font-bold text-xl dark:text-white">My Tasks</h2>
            <form onSubmit={eventsSearch}  className="flex flex-col sm:flex-row gap-4  mt-5">
                <Search />
                {isLoadingCategories ? <p>Loading...</p> : createFilter(categories, 'Category: ', 'category')}
                {isLoadingTags ? <p>Loading...</p> : createFilter(tags, 'Tag: ', 'tag')}
                <button type='submit' ><SearchIcon/></button>
            </form>
            <div className="grid grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))] gap-5 mt-8 mb-8">
                {isLoading ? <p>Loading...</p> : createTask(events)}
            </div>
        </section>
    )
}
