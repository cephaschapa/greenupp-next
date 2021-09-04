function Footer() {
    let date =  new Date().getFullYear();
    return (
        <footer className="bg-gray-800 p-2 text-white flex justify-center text-sm space-x-3">
            <p>Greenupp &copy; {date}</p>
            <p>Contact</p>
            <p>News</p>
            <p>Careers</p>
        </footer>
    )
}

export default Footer
