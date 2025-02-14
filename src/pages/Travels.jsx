import React from "react";
import { useState } from "react";
import { destinations, travels } from "../data/db.json";
import TravelModal from "../components/TravelModal";

const Travels = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);


  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const toggleDropdown = () => setIsOpen(!isOpen);
  return (
    <div className="p-4">
      <div className="rounded-lg mb-4 bg-neutral-500 m-2.5 p-4 flex justify-between items-center">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" aria-expanded={isOpen ? 'true' : 'false'} >Viaggi Precedenti <svg class="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
      </div>
      <div className="rounded-lg mb-4 bg-neutral-500 m-2.5 p-4 flex justify-between items-center">
        <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" aria-expanded={isOpen ? 'true' : 'false'} onClick={toggleDropdown}>Viaggi in Arrivo<svg class="w-2.5 h-2.5 ms-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
        </svg>
        </button>
      </div>


      {isOpen && (
        <div className="max-w-400 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {travels.map((travel) => {
              const destination = destinations.find(
                (dest) => dest.destination_id === travel.destination_id
              );

              return (
                <div key={travel.id_viaggio} className="max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="bg-cover h-48 rounded-t-lg" style={{ backgroundImage: `url(${destination.image})` }}>
                  </div>
                  <div className="p-4">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{destination.destination_name}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{new Date(travel.start_date).toLocaleDateString()}{"  "}{new Date(travel.end_date).toLocaleDateString()}</p>
                    <p className="mb-4 text-sm text-blue-300">{travel.abstract}</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Vedi Dettagli
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </a>
                  </div>
                </div>

              );
            })}
          </div>
        </div>

      )}

      <div className="rounded-lg bg-neutral-400 p-4 flex justify-center my-3">
        <h2 className="text-white cursor-pointer" onClick={openModal}>
          + AGGIUNGI NUOVO VIAGGIO
        </h2>
      </div>
      {showModal && <TravelModal closeModal={closeModal} />}
    </div>

  )
}

export default Travels;
