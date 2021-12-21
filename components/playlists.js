import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import useSpotify from "../hooks/useSpotify";
import GeneratePlaylist from "../pages/generatePlaylist";
import Link from "next/link";
export default function Playlists() {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [playlists, setPlaylists] = useState([]);
    const [playlist1, setPlaylist1] = useState('');
    const [playlist2, setPlaylist2] = useState('');

    useEffect(() => {
        if (spotifyApi.getAccessToken()) {
            spotifyApi.getUserPlaylists().then((data) => {
                setPlaylists(data.body.items)
            })
        }
    }, [session, spotifyApi])
    if (playlists) {
        return (
            <div className=" flex flex-col p-2 items-center">{playlists.map((playlist) => (
                <div className="grid grid-cols-3 bg-[#212121] p-1 rounded-md m-1 w-full" key={playlist.name}>
                    <div className=" col-span-2 grid grid-cols-2 justify-center items-center bg-[#212121]">
                        <img className="w-auto h-full rounded-tl-md rounded-bl-md" src={playlist.images[0].url}></img>
                        <h1 className="text-white text-xl mx-3 italic">{playlist.name}</h1>
                    </div>

                    <div className="flex flex-col -end bg-[#212121] justify-center items-center p-4">
                        <button className="bg-[#18D860] rounded-full w-full h-10 my-1" onClick={() => setPlaylist1(playlist.id)}>
                            <h1 className="text-white">Playlist 1</h1>
                        </button>
                        <button className="bg-[#18D860] rounded-full w-full h-10" onClick={() => setPlaylist2(playlist.id)}>
                            <h1 className="text-white">Playlist 2</h1>
                        </button></div>
                </div>))
            }
                <button className="bg-[#18D860] rounded-full w-max h-10 justify-self-center text-white px-3 my-1"> continue</button>
            </div>);
    }

    else {
        return null
    }

}