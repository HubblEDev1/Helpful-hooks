import React, { useEffect, useRef, useState } from 'react'

export const useFetch = (url) => {
    
    const isMounted = useRef(true);


    const [values, setValues] = useState({data: null, loading: true, error: null});

    useEffect(() => {
        return () => {
            console.log('Unmounted');
            isMounted.current = false;
        }
    },[]);

    useEffect(() => {
        setValues({data: null, loading: true, error: null});
        fetch(url).then(resp => resp.json()).then(data => {
            //setTimeout(() => {
                if(isMounted.current)
                setValues({
                    loading: false,
                    error: null, 
                    data
                })
            //})
        }).catch(() => {
            setValues({
                data: null,
                loading: false,
                error: 'No se pudo cargar la info', 
            })
        })
    }, [url]);

    return values;
}
