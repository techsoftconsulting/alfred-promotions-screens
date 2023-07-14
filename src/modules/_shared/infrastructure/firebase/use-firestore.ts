import { getFirestore as getBaseFirestore } from 'firebase/firestore';
import { getFirebase } from '@shared/infrastructure/firebase/use-start-firebase';

export function getFirestore() {
    return getBaseFirestore(getFirebase());
}

export default function useFirestore() {
    return getFirestore();
}
