import React from "react";

const UserModal = ({ closeModal }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
      <div className="bg-white rounded-lg p-8 z-10 max-w-md w-full">
        <h2 className="text-xl mb-4">Aggiungi Accompagnatore</h2>
        <form className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Nome"
              required
            />
          </div>
          <div>
            <label
              htmlFor="cognome"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Cognome
            </label>
            <input
              type="text"
              id="cognome"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Cognome"
              required
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="telefono"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Telefono
            </label>
            <input
              type="tel"
              id="telefono"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
              placeholder="Telefono"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Aggiungi
          </button>
        </form>
        <button
          className="mt-4 text-gray-500 hover:text-gray-700"
          onClick={closeModal}
        >
          Chiudi
        </button>
      </div>
    </div>
  );
};

export default UserModal;
