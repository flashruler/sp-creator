import { useEffect, useState } from "react";
import {useSession } from "next-auth/react"
import useSpotify from "../hooks/useSpotify";
export default function Playlists() {
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
        <div className="p-2">{playlists.map((playlist) => (
            <div className="flex flex-row bg-[#212121] rounded-md my-1" key={playlist.name}>
                <img className="w-20 h-20 rounded-tl-md rounded-bl-md" src={playlist.images[0].url}></img>
                <h1 className="text-white text-xl mx-2 italic">{playlist.name}</h1>
            </div>))
        }</div>);
}