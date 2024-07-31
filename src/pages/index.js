import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";
import Service from "@/components/Service";
import Moreinfo from "@/components/Moreinfo";
import Product from "@/components/Product";
import Menuflag from "@/components/Menuflag";
import Clientpart from "@/components/Clientpart";
import { useRouter } from "next/navigation";



const inter = Inter({ subsets: ["latin"] });
import Hero from "@/components/Hero";
import { useEffect,useState } from "react";
import { isLogin } from "@/utils";



export default function Home() {
  const [user, setUser] = useState({ name: "", email: "" });
  const router=useRouter();
  useEffect(() => {
    const authenticate = async () => {
      const loggedIn = await isLogin();

      if (loggedIn.auth) {
        setUser(loggedIn.auth);
      } else {
        router.push("/login");
      }
    };

    authenticate();
  }, [router]);
  return (
   <Layout>
    <Hero />
    <Service/>
    <Moreinfo/>
    <Product/>
    <Menuflag/>
    <Clientpart/>
   </Layout>
  );
}
