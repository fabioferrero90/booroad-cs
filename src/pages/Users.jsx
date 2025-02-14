import { useState } from "react";
import UserModal from "../components/UserModal";

const Users = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* gray bar */}
      <div className="container mx-auto p-4">
        <div className="rounded-lg mb-4 bg-neutral-500 m-2.5 p-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search"
            className="p-2 rounded border border-gray-300 bg-gray-200"
          />

          <div className="flex space-x-4">
            <select className="border border-gray-300 rounded p-2 bg-gray-200">
              <option value="option1">DALLA A ALLA Z</option>
              <option value="option2">DALLA Z ALLA A</option>
            </select>

            <select className="border border-gray-300 rounded p-2 bg-gray-200">
              <option value="option1">IN VIAGGIO AL</option>
              <option value="option2">IN VIAGGIO DAL</option>
            </select>
          </div>
        </div>
      </div>

      {/* users */}
      <div className="container mx-auto p-4 max-w-350">
        <div className="rounded-lg bg-gray-700 p-4 flex justify-start my-3">
          <h2 className="text-white">FRANCO ROSSI</h2>
          <div className="flex justify-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
              />
            </svg>
          </div>
        </div>
        <div className="rounded-lg bg-gray-700 p-4 flex justify-start my-3">
          <h2 className="text-white">MATTEO BIANCHI</h2>
        </div>
        <div className="rounded-lg bg-neutral-400 p-4 flex justify-center my-3">
          <h2 className="text-white cursor-pointer" onClick={openModal}>
            + AGGIUNGI ACCOMPAGNATORE
          </h2>
        </div>
      </div>

      {showModal && <UserModal closeModal={closeModal} />}
    </>
  );
};

export default Users;
