const Section = () => {
    return (
        <div>
            <section id="home" className="h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
                <h1 className="pt-40 text-center text-4xl text-gray-800 dark:text-white">Home</h1>
            </section>

            <section id="about" className="h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
                <h1 className="pt-40 text-center text-4xl text-gray-800 dark:text-white">About</h1>
            </section>

            <section id="services" className="h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
                <h1 className="pt-40 text-center text-4xl text-gray-800 dark:text-white">Services</h1>
            </section>

            <section id="contact" className="h-screen bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
                <h1 className="pt-40 text-center text-4xl text-gray-800 dark:text-white">Contact</h1>
            </section>
        </div>
    )
}

export default Section
