import Link from "next/link";
import {useRouter} from "next/router";
import style from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    console.log(router)

    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>about</a>
            </Link>
            <style></style>
        </nav>
    )
}