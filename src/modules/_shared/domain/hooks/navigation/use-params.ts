import {useRoute} from '@react-navigation/native';

export default function useParams(): object | undefined {
    const {params}: { params?: any } = useRoute();

    return params;
}
