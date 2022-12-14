import Link from "next/link";
import {useRouter} from "next/router";
import style from "./NavBar.module.css";

export default function NavBar(){
    const router = useRouter();
    console.log(router)

    return (
        <nav>
            <Link href="/">
                <a className={router.pathname === "/" ? "active" : ""}>Home</a>
            </Link>
            <Link href="/about">
                <a className={router.pathname === "/about" ? "active" : ""}>about</a>
            </Link>
            {
                //μ€νμΌμ html tag
            }
            {/*style jsx plugin installed*/}
            {/* eslint-disable-next-line react/no-unknown-property */}
            <style jsx>{`
                nav {
                    background-color: tomato;
                }
                a {
                    text-decoration: none;
                }
                .active {
                    color: yellow;
                }
            `}</style>
        </nav>
    )
}