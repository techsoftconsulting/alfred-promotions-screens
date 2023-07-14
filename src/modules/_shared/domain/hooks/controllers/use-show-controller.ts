
interface ShowControllerProps {
    resource: string;
    id: string;
}

export default function useShowController(props: ShowControllerProps) {
    switch (props.resource) {
        default:
            throw new Error('Resource not defined');
    }
}
