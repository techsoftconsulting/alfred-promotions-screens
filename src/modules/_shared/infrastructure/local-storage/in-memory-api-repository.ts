import AsyncStorage from '@react-native-async-storage/async-storage';

type QueryFilter = {
    field: string;
    operator: any;
    value: string[] | number | string | boolean;
};

type QueryDocsParams = {
    filters: QueryFilter[];
    limit?: number;
    orderBy?: {
        field: string;
        direction: any;
    };
};

export default abstract class InMemoryApiRepository {

    async updateDoc(collectionName: string, docId: string, data: any) {
        await AsyncStorage.setItem(`${collectionName}/${docId}`, JSON.stringify(data));
    }

    async deleteDoc(collectionName: string, docId: string) {
        await AsyncStorage.removeItem(`${collectionName}/${docId}`);
    }

    async getDoc(collectionName: string, docId: string) {
        const item = await AsyncStorage.getItem(`${collectionName}/${docId}`);
        if (!item) return null;
        return JSON.parse(item);
    }

    async saveDoc(collectionName: string, docId: string, data: any) {

        await AsyncStorage.setItem(`${collectionName}/${docId}`, JSON.stringify(data));
    }

    async getDocs(collectionName: string, params: QueryDocsParams) {

        const keys = await AsyncStorage.getAllKeys();
        const promises = keys.filter((keys) => keys.includes(collectionName)).map(async (k) => {
            const item = await AsyncStorage.getItem(k);

            if (!item) return null;

            return JSON.parse(item);
        });


        return Promise.all(promises);
    }
}