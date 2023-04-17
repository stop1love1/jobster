import { useEffect, useState } from 'react';

export function useDebounce(value, duration = 800) {
    const [debounceValue, setDebounceValue] = useState(value);
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, duration);
        return () => {
            clearTimeout(timer);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);
    return debounceValue;
}
