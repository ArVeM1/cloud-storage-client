import {LoginFormDto, LoginResponseDto, RegisterFormDto, RegisterResponseDto, UserDto} from "@/api/dto/auth.dto";
import axios from "@/core/axios";
import {destroyCookie} from "nookies";

export const register = async (val: RegisterFormDto): Promise<RegisterResponseDto> => {
    return (await axios.post('/auth/register', val)).data;
}

export const login = async (val: LoginFormDto): Promise<LoginResponseDto> => {
    return (await axios.post('/auth/login', val)).data;
}

export const getMe = async (): Promise<UserDto> => {
    return (await axios.get('/users/me')).data
}

export const logout = () => {
    destroyCookie(null, "_token", {path: '/'})
}