import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://images.pexels.com/photos/16323603/pexels-photo-16323603.jpeg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            React development is driven by passionate developers who love building modern and interactive web experiences. Their dedication helps create applications that are fast, responsive, and easy to use.
                        </p>
                        <p className="mt-4 text-gray-600">
                            With a strong community and continuous improvements, React gives developers the tools they need to turn creative ideas into real-world applications. Developers constantly learn, experiment, and share their knowledge with others.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}