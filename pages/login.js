import { getProviders, signIn } from "next-auth/react";
import {BackspaceIcon,} from "@heroicons/react/outline"
import Link from 'next/link'

export default function Login({ providers }) {
    return (
        <div className="flex flex-col items-center bg-[#1E1B18] min-h-screen w-full justify-center">
            <h1 className="text-white text-2xl m-3 text-center">Welcome to Spotify Playlist Generator</h1>
            {Object.values(providers).map((provider) => (
                <div className="flex flex-row justify-center" key={provider.name}>
                    {console.log(provider.name)}
                    <button className="bg-[#18D860] text-white p-5 rounded-full"
                        onClick={() => signIn(provider.id, { callbackUrl: "/" }
                        )}
                    >login with {provider.name}
                    </button>
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: {
            providers,
        },
    };
}