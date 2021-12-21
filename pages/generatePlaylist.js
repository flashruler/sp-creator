import { useEffect, useState } from "react";
import { useSession } from "next-auth/react"
import useSpotify from "../hooks/useSpotify";



export default function GeneratePlaylist(props) {
    const spotifyApi = useSpotify();
    const { data: session } = useSession();
    const [playlist1, setPlaylist1] = useState([]);
    const [playlist2, setPlaylist2] = useState([]);
    if(props){
        let playlist1 = props.playlist1
        let playlist2 = props.playlist2
        useEffect(() => {
            if (spotifyApi.getAccessToken() && playlist1!='') {
                spotifyApi.getPlaylist(playlist1).then((data1) => {
                    setPlaylist1(data1.body.tracks.items)
                })
            }
        }, [session, spotifyApi])
        useEffect(() => {
            if (spotifyApi.getAccessToken() && playlist2!='') {
                spotifyApi.getPlaylist(playlist2).then((data2) => {
                    setPlaylist2(data2.body.tracks.items)
                })
            }
        }, [session, spotifyApi])
    }
    console.log(playlist1)
    console.log(playlist2)

    return null;
}