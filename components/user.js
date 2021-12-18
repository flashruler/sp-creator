import { useSession } from "next-auth/react"
import { useEffect, useState } from "react";
import useSpotify from "../hooks/useSpotify";
export default function User() {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items)
            })
        }
    }, [session, spotifyApi])
    console.log(playlists)
    return (
        <div>
            <div className="flex flex-row w-full h-48 p-2 bg-gradient-to-b  from-[#18D860] to-transparent items-center justify-center">
                <img className="rounded-full w-24 h-24" src={session?.user.image} alt="" />
                <div className="flex flex-col">
                    <h2 className="mx-3 text-2xl text-white font-bold">{session?.user.name}</h2>
                    <h2 className="mx-3 text-xl text-white font-light">{session?.user.username}</h2></div>
            </div>
        </div>
    );
}