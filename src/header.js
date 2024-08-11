import "./header.css";

function Header() {
    
    const navItems = [
        {
            label: "General Info",
            href: "javascript:;",
            subItems: [
                { label: "What is Chiropractic?", href: "chiropractic.html" },
                { label: "What is Physiotherapy?", href: "physiotherapy.html" },
                { label: "Your First Visit", href: "your-first-visit.html" },
                { label: "How Does Chiropractic Work?", href: "chiropractic-work.html" },
                { label: "Home Exercise Videos", href: "video-gallery.html" }
            ]
        },
        { label: "About", href: "about-us.html" },
        {
            label: "Condition Treated",
            href: "javascript:;",
            subItems: [
                { label: "Chest Pain", href: "chest-pain.html" },
                { label: "Buttocks", href: "buttocks.html" },
                { label: "Ankles and Feet", href: "ankles-and-feet.html" },
                { label: "Hips", href: "hips.html" },
                { label: "Neck", href: "Neck.html" },
                { label: "Shoulder", href: "shoulder.html" },
                { label: "Knees", href: "knees.html" },
                { label: "Arms and Hands", href: "arms-and-hands.html" },
                { label: "Back", href: "back.html" },
                { label: "Legs", href: "legs.html" }
            ]
        },
        { label: "Pregnancy", href: "pregnancy.html" },
        { label: "Videos", href: "video-gallery.html" },
        { label: "FAQ", href: "faq.html" },
        { label: "Blog", href: "blog.html" },
        { label: "Contact us", href: "contact-us.html" }
    ];

    
    return (
        <header className="site-header">
                <section className="topHeader">
                    <div className="container">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-auto">
                                <a href="#" className="sendEmail"><i className="fas fa-envelope"></i>info@head2toechiropractic.ie</a>
                            </div>
                            <div className="col-auto">
                                <a href="#" className="online-booking">Online Booking</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bottomHeader">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-auto logo-prt">
                                <a href="index.html" className="logo">
                                    Logo
                                </a>
                            </div>
                            <div className="col">
                                <button className="hambergerBtn">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                                <nav className="customNav">
                                    <ul className="d-flex justify-content-between">
                                        {navItems.map((item, index) => (
                                            <li key={index} className={item.subItems ? 'hasSubmenu' : ''}>
                                                <a href={item.href}>{item.label} {item.subItems && <i className="fas fa-caret-down"></i>}</a>
                                                {item.subItems && (
                                                    <ul>
                                                        {item.subItems.map((subItem, subIndex) => (
                                                            <li key={subIndex}>
                                                                <a href={subItem.href}>{subItem.label}</a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
    );
}

export default Header;
