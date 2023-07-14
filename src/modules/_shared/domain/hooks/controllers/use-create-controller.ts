
interface CreateControllerProps {
    resource: string;
}

export default function useCreateController(props: CreateControllerProps) {
    switch (props.resource) {

        default:
            throw new Error('Resource not defined');
    }
}
