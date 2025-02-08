import { useEffect, useState } from "react";
import Echo from "laravel-echo";
import Pusher from "pusher-js";


const useChannelHook = () => {
    const [message, setMessage] = useState<string | null>(null);

    useEffect(() => {
        const echo = new Echo({
            broadcaster: 'reverb',
            key: import.meta.env.VITE_REVERB_APP_KEY,
            wsHost: import.meta.env.VITE_REVERB_HOST,
            wsPort: import.meta.env.VITE_REVERB_PORT,
            wssPort: import.meta.env.VITE_REVERB_PORT,
            forceTLS: (import.meta.env.VITE_REVERB_SCHEME ?? 'https') === 'https',
            enabledTransports: ['ws', 'wss'],
        });

        const channel = echo.channel("character.selection");
        channel.listen(".CharacterSelected", (data: { message: string }) => {
            setMessage(data.message);
        });

        return () => {
            echo.disconnect();
        };
    }, []);

    return message;
};

export default useChannelHook;
