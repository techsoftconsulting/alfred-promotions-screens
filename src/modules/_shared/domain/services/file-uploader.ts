export default interface FileUploader {
    uploadFile(
        blobFile: Blob,
        path: string,
        fileName?: string
    ): Promise<string>;

    uploadFiles(
        files: { blobFile: Blob; path: string; fileName?: string }[]
    ): Promise<string[]>;

    generateBlurHash(files: { fileName: string; dimensions: { width?: number, height?: number } }[]): Promise<{ fileName: string, blurhash: string }[]>;
}
