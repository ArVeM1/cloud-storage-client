import {UserDto} from "@/api/dto/auth.dto";

export interface FileItemDto {
    filename: string;
    originalName: string;
    size: number;
    mimetype: string;
    user: UserDto;
    deletedAt: string | null;
    id: number;
}