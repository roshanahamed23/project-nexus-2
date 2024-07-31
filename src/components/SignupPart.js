"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { isLogin } from "@/utils/index";

const SignupPart = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pageReady, setPageReady] = useState(false);
    const [errors, setErrors] = useState({ name: "", email: "", password: "" });
    const router = useRouter();

    useEffect(() => {
        const authenticate = async () => {
            const loggedIn = await isLogin();
            if (loggedIn.auth) {
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
            name,
            email,
            password,
        };

        try {
            const res = await axios.post(`api/signup`, payload);
            toast.success(
                <div>
                    Account Created Successfully <br /> Please Log In
                </div>
            );
            router.push("/login");
        } catch (err) {
            if (err.response && err.response.data && err.response.data.errors) {
                setErrors(err.response.data.errors);
            } else {
                toast.error("An error occurred");
            }
        }
    };

    if (!pageReady) {
        return <div>Loading...</div>; // or a loader component
    }

    return (
        <div>
            <div className="bg-white flex flex-col justify-center items-center p-12 outline-gray-500 border shadow-xl">
                <h3 className="text-red font-bold text-2xl mb-10">Sign up</h3>
                <form className="flex w-[300px] mx-auto flex-col pt-2 gap-2" onSubmit={handleSubmit}>
                    <input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="input"
                        type="text"
                        placeholder="User Name"
                        required
                    />
                    {errors.name && <p className="text-red">{errors.name}</p>}
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="input"
                        type="email"
                        placeholder="Email"
                        required
                    />
                    {errors.email && <p className="text-red">{errors.email}</p>}
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="input"
                        type="password"
                        placeholder="Password"
                        required
                    />
                    {errors.password && <p className="text-red">{errors.password}</p>}
                    <button className="uppercase bg-red rounded-md hover:bg-accentDark px-4 py-2 text-white mt-4">
                        Signup
                    </button>
                </form>
                <p className="mt-2">
                    Already have an Account?
                    <a className="ml-2 text-red" href="/login">Login</a>
                </p>
            </div>
        </div>
    );
};

export default SignupPart;
