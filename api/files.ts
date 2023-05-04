import {RegisterFormDto, RegisterResponseDto} from "@/api/dto/auth.dto";
import axios from "@/core/axios";
import {FileItemDto} from "@/api/dto/files.dto";

type FileType = "all" | "photos" | "trash";

export const uploadFile = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;

    const formData = new FormData();
    formData.append("file", file);

    const config = {
        headers: { "Content-Type": "multipart/form-data" },
        onProgress: (event: ProgressEvent) => {
            onProgress({ percent: (event.loaded / event.total) * 100 });
        },
    };

    try {
        const { data } = await axios.post("files", formData, config);

        onSuccess();

        return data;
    } catch (err) {
        onError({ err });
    }
}

export const remove = async (ids: number[]): Promise<void> => {
    return (await axios.delete('/files?ids=' + ids)).data;
}

export const getAll = async (type: FileType = 'all'): Promise<FileItemDto[]> => {
    return (await axios.get('/files?type=' + type)).data;
}