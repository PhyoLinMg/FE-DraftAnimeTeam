import axios, { AxiosError } from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';

// Create an instance of Axios if needed
const apiClient: AxiosInstance = axios.create({
    baseURL: 'http://localhost/api/v1/', // Replace with your API base URL
    headers: {
        'Content-Type': 'application/json',
    },
});

export const fetchBoard = async (url: string): Promise<BoardsData> => {
    try {
        const response: AxiosResponse<BoardsData> = await apiClient.get(url);
        return response.data;
    } catch (error: any) {  // Add type annotation for error parameter
    if (axios.isAxiosError(error)) {  // Make sure axios is imported
        console.error('Axios error:', error.message);
    } else {
        console.error('Unexpected error:', error);
    }
    throw error;
  }
};