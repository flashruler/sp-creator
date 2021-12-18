import Link from 'next/link'
import {LoginIcon,} from "@heroicons/react/outline"
import {signOut, useSession} from "next-auth/react"

export default function Menu_Bar(){
return(<div className="flex flex-row bg-black w-full h-14 items-center p-2 justify-center">
    <h1 className="text-white text-xl grow italic md:text-3xl">Spotify Playlist Generator</h1>
    <button className="bg-[#18D860] p-2 rounded-full"onClick={()=>signOut()}><h1 className="text-white text-md uppercase">Logout</h1></button>
</div>)
}