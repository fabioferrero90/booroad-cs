import React from 'react'

const TravelModal = ({ closeModal }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
                className="fixed inset-0 bg-black opacity-50"
                onClick={closeModal}
            ></div>
            <div className="bg-emerald-400 rounded-lg p-8 z-10 max-w-md w-full">
                <h2 className="text-xl mb-4 text-white font-bold">
                    AGGIUNGI NUOVO VIAGGIO
                </h2>
                <form className="space-y-4">
                    <div>
                        <input
                            type="text"
                            id="destination"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Destinazione"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="start-date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Data di partenza"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="end-date"
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Data di ritorno"
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="itinerary"
                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-white dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
                            placeholder="Itinerario"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bg-blue-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-emerald-700 dark:hover:bg-emerald-600 dark:focus:ring-blue-800"
                    >
                        Aggiungi
                    </button>
                </form>
                <button
                    className="mt-4 text-white hover:text-gray-700 "
                    onClick={closeModal}
                >
                    Chiudi
                </button>
            </div>
        </div>
    );
};

export default TravelModal;
