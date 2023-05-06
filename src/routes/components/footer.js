function Footer() {
    const today = new Date()
    const year = today.getFullYear()

    return (
        <div className="text-center mt-3">© Parfait 2020-{year}</div>
    );
}

export default Footer;