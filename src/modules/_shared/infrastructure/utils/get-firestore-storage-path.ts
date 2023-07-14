export default function getFirestoreStoragePath(path) {

    const host = 'https://w.com';
    let url = new URL(host + path.replaceAll('%2F', '/'));

    for (const key of url.searchParams.keys()) {
        url.searchParams.delete(key);
    }

    url.searchParams.delete('token');

    const refName = url.toString()?.replace(host, '');

    return refName.split('/o/').pop();
}