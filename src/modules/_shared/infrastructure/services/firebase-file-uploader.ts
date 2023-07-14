import { fetchJson } from '@shared/infrastructure/http/fetch';
import getApiUrl from '@shared/infrastructure/utils/get-api-url';
import FileUploader from '@shared/domain/services/file-uploader';
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';

export default class FirebaseFileUploader implements FileUploader {

    async uploadFile(
        blobFile: Blob,
        path: string,
        fileName?: string
    ): Promise<string> {
        const storage = getStorage();
        const fileRef = ref(storage, path + '/' + fileName);

        const blob = blobFile;

        return new Promise((resolve, reject) => {
            uploadBytes(fileRef, blob).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((downloadURL) => {
                    resolve(downloadURL);
                });
            }).catch(error => {
                console.log('upload error:', error);
                reject();
            });
        });
    }

    async uploadFiles(
        files: { blobFile: Blob; path: string; fileName?: string | undefined }[]
    ): Promise<string[]> {
        const promises = files.map((item) =>
            this.uploadFile(item.blobFile, item.path, item.fileName)
        );

        return Promise.all(promises);
    }

    async generateBlurHash(files: { fileName: string; dimensions: { width?: number | undefined; height?: number | undefined; }; }[]): Promise<{ fileName: string; blurhash: string; }[]> {
        const response = await fetchJson(getApiUrl('/general/blurhash/generate'), {
            method: 'POST',
            body: JSON.stringify({
                images: files
            })
        });

        const rs = response.json;
        return rs.items;
    }
}
