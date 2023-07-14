
interface EditControllerProps {
    resource: string;
    id: string;
}

export default function useEditController(props: EditControllerProps) {
    switch (props.resource) {

        default:
            throw new Error('Resource not defined');
    }
}
