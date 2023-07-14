import { useEffect } from 'react';

export default function useClearAppAsyncStorage() {
    useEffect(() => {
        (async () => {
            await removeAllAsyncStorageData();
        })();
    }, []);
}
export async function removeAllAsyncStorageData() {
    try {
    } catch (error) {
        // hidden if failed
    }
}
