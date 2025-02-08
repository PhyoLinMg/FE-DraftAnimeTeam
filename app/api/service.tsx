import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import { CustomError } from './exception/CustomError';
// Create an instance of Axios if needed
const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost/api/v1/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchBoard = async (): Promise<BoardsData> => {
    try {
        const response: AxiosResponse<BoardsData> = await apiClient.get('boards');
        return response.data;
    } catch (error: any) {  // Add type annotation for error parameter
    if (axios.isAxiosError(error)) {  // Make sure axios is imported
        throw new CustomError(error.message); 
    } else {
        console.error('Unexpected error:', error);
    }
    throw error;
  }
};

export const fetchBattles= async (page:number): Promise<BattleResponse> =>{
    try {
        const response: AxiosResponse<BattleResponse> = await apiClient.get('battles', {
            params: {
                page: page
            }
        });
        return response.data;
    } catch (error: any) {  // Add type annotation for error parameter
        if (axios.isAxiosError(error)) {  // Make sure axios is imported
            throw new CustomError(error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}

export const fetchRandomCharacter = async (battleId: String) => {
    try {
        const response: AxiosResponse<Character> = await apiClient.get('random');
        return response.data;
    } catch (error: any) {  // Add type annotation for error parameter
        if (axios.isAxiosError(error)) {  // Make sure axios is imported
            throw new CustomError(error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}
export const skipCharacter= async (battleId:number,playerId:number)=> {
    try {
        const response: AxiosResponse<Character> = await apiClient.post('players/skip',{
            battle_id: battleId,
            player_id: playerId
        });
        return response.data;
    } catch (error: any) {  // Add type annotation for error parameter
        if (axios.isAxiosError(error)) {  // Make sure axios is imported
            throw new CustomError(error.message);
        } else {
            console.error('Unexpected error:', error);
        }
        throw error;
    }
}

export const matchQueue= async(name: String): Promise<String> => {
    try{
        const response: AxiosResponse<GeneralResponse> = await apiClient.post('queue', {
             name: name,
        });
        return response.data.message;
    }catch(error:any){
        if(axios.isAxiosError(error)){
            throw new CustomError(error.message);
        }
        else console.error('Unexpected error:', error);
        throw error;
    }
      
    
}

