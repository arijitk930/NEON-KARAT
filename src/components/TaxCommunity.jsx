import React from 'react';

const TaxComponent = () => {
    return (
        <>
            <div className='bg-purple-900 text-white'>
                <h1 className='font-primaryBold text-4xl pt-16 ml-28'>A CARD DESIGNED <br />
                    TO HELP YOU GROW</h1>
                <div className="flex flex-wrap w-full items-center justify-evenly mx-auto py-8 px-4">

                    {/* Left Side Text */}
                    <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center text-white text-center md:text-left mb-4 md:mb-0">
                        <div className="mb-8">
                            <h2 className="text-2xl font-bold text-white font-primaryBold">Higher limits
                            </h2>
                            <p className="mt-2">
                                We give creators the spending power they need to power their growth.

                            </p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold font-primaryBold">Build your credit
                            </h2>
                            <p className="mt-2">
                                Build your personal credit history so you can get your dream apartment, car, or house.

                            </p>
                        </div>
                    </div>
                    {/* Right Side Image */}
                    <div className="w-full md:w-1/3 flex justify-center">
                        <img
                            src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805045/images/atje7dv8momajo6mv2yi.jpg"
                            alt="Event"
                            className="rounded-lg h-64 md:h-96 w-full md:w-auto"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap w-full max-w-6xl bg-white items-center justify-evenly mx-auto py-8 px-4">
                {/* Left Side Image */}
                <div className="w-full md:w-1/2 mb-4 md:mb-0 flex justify-center">
                    <img
                        src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805041/images/qkqjctn9akyqi8tojm3c.jpg"
                        alt="Event"
                        className="rounded-lg w-full md:w-auto h-auto"
                    />
                </div>
                {/* Right Side Text */}
                <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center text-center md:text-left">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-blue-600 font-primaryBold">PAY LESS TAX</h2>
                        <p className="text-gray-800 mt-2">
                            Track your business expenses to maximize your tax savings.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold text-blue-600 font-primaryBold">NO FEES</h2>
                        <p className="text-gray-800 mt-2">
                            No interest, no foreign transaction fees or fees of any kind.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap w-full items-center justify-evenly mx-auto py-8 px-4
             bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                {/* Left Side Text */}
                <div className="w-full md:w-1/2 md:pl-8 flex flex-col justify-center text-white text-center md:text-left mb-4 md:mb-0">
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-white font-primaryBold">Community</h2>
                        <p className="mt-2">
                            Join the Karat community for exclusive events with the biggest creators in the world.
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold font-primaryBold">Earn unique rewards</h2>
                        <p className="mt-2">
                            Earn points to redeem for one-of-a-kind rewards, like having your face on a billboard in Times Square.
                        </p>
                    </div>
                </div>
                {/* Right Side Image */}
                <div className="w-full md:w-1/3 flex justify-center">
                    <img
                        src="http://res.cloudinary.com/deus3nlcx/image/upload/v1730805043/images/kfc5u2twe6nyobdmqh9q.jpg"
                        alt="Event"
                        className="rounded-lg h-64 md:h-96 w-full md:w-auto"
                    />
                </div>
            </div>
        </>
    );
};

export default TaxComponent;
