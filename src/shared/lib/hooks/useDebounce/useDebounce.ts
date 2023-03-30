import {
    MutableRefObject, useCallback, useRef,
} from 'react';

export function useDebounce<T>(callback: (...args: T[]) => void, delay: number) {
    const timer = useRef(false) as MutableRefObject<any>;

    return useCallback((...args: T[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback();
        }, delay);
    }, [callback, delay]);
}
