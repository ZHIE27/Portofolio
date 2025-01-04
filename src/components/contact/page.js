import React from "react";
import style from "./contact.module.css"
const Contact = ()=> {
    return (
        <>
            <div id="contact" className={`${style.container} relative m-auto bg-gray-700`}>
                <h1 className={`${style.title} text-center`}>Contact Me</h1>
            <div className="flex justify-center align-center">
                {/*contact */}
                <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
            <form className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Your Name"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
                </label>
                <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="yourname@example.com"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
                </label>
                <textarea
                id="message"
                name="message"
                rows="4"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Write your message here..."
                />
            </div>
            <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                Send Message
            </button>
            </form>
                </div>
                {/* maps */}
                <iframe className={`${style.map} m-6`} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d495.61013043945763!2d106.6924114406843!3d-6.409321343576191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1735966664907!5m2!1sid!2sid" width="600" height="450" border="0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
            </div>
        </>
    )
}

export default Contact;