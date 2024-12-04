function NavbarItem({children, idSection}) {
    const handleClick = () => {
        const section = document.querySelector(idSection);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <button className="text-lg hover:text-teal-400 transition-colors" onClick={handleClick}>{children}</button>
    );
}

export default NavbarItem;