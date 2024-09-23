import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="bg-gray-800 text-white text-center p-4">
                <p>&copy; {new Date().getFullYear()} Creatorz Events. All rights reserved.</p>
            </footer>

        </div>
    )
}

export default Footer;
