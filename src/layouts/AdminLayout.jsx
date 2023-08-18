export default function AdminLayout() {
    return (
        <>
            <header>
                <nav className="d-flex space-btw container">
                    <div>
                        <h1>
                            <Link to={"/"}>
                                two failures
                            </Link>
                        </h1>
                    </div>
                    <div className="nav-item">
                        <Link to={"#"}>
                            Admin Panel
                        </Link>
                    </div>
                </nav>
            </header>

            <main className="mt-2">
                <Outlet />
            </main>

            <footer>
                <div className="text-center mt-3">
                    <h4>Log Out</h4>
                </div>
            </footer>
        </>
    )
}
