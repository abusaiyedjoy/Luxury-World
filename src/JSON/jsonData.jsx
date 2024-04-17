import { useEffect, useState } from 'react';

const useJsonData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch('./data.json');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const details = await res.json();
                setData(details);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    return { data, loading, error };
};

export default useJsonData;
