
import { useState, useEffect } from 'react';

function useFetchData(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url).then(response => response.json())
            .then((data) => {
                setData(data);
            }).catch(e => console.log(e))
    }, [])

    return [data, setData]
}

export default useFetchData;