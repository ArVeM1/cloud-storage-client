export interface LoginFormDto {
    email: string;
    password: string;
}

export interface LoginResponseDto {
    token: string;
}

export interface RegisterFormDto {
    email: string;
    fullName: string;
    password: string;
}

export interface RegisterResponseDto {
    token: string;
}

export interface UserDto {
    id: number;
    email: string;
    fullName: string;
}