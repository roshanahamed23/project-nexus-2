"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { isLogin, setAuthentication } from "@/utils/index";

const Loginpart = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pageReady, setPageReady] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const authenticate = async () => {
            const Loggedin = await isLogin();
            if (Loggedin.auth) {
                router.push("/");
            } else {
                setPageReady(true);
            }
        };
        authenticate();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            email,
            password,
        };

        axios
        .post('api/login', payload)
        .then((res) => {
          setAuthentication(res.data.token)
          toast.success("LOGIN SUCCESSFULLY");    
          router.push("/");
        })
        .catch((err) => {
          toast.error(err.response?.data?.message);
        });
    };

    if (!pageReady) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <div className='bg-white flex flex-col justify-center items-center p-12 outline-gray-500 border shadow-xl'>
                <h3 className='text-red font-bold text-2xl mb-10'>Sign in</h3>
                <form
                    className="flex w-[300px] mx-auto flex-col pt-2 gap-2"
                    onSubmit={handleSubmit}
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        type="password"
                        placeholder="Password"
                        required
                    />
                    <button className="uppercase bg-red rounded-md hover:bg-accentDark px-4 py-2 text-white mt-4">
                        Login
                    </button>
                </form>
                <p className='mt-2'> Create New One?
                    <a className="ml-2 text-red" href="/signup">Sign up</a>
                </p>
            </div>
            <div>

            </div>
        </div>
    );
}

export default Loginpart;
