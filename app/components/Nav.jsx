import Link from "next/link"

const Nav = () => {

    return (
        <div className="Nav">
            <nav>
                <Link href="/">
                    Home
                </Link>
                <Link href="/posts">
                    Posts
                </Link>
                {/* <Link style={{ margin: "7px" }} href="/articles">
                    Articles
                </Link> */}
            </nav>
        </div>
    )
}

export default Nav;