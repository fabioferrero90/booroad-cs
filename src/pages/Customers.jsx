import CustomerDetails from "./CustomerDetails";
import { useState } from "react";

const contacts = [
  { name: "FRANCO ROSSETTI" },
  { name: "GIACOMO NICOLINI" },
  { name: "FRANCO ROSSETTI" },
  { name: "GIACOMO NICOLINI" },
];

const Customers = () => {
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  const handleCustomerClick = (customer) => {
    setSelectedCustomer(customer);
  };

  const handleBackClick = () => {
    setSelectedCustomer(null);
  };

  return (
    <div className="p-6 bg-white text-white">
      {selectedCustomer ? (
        <div>
          <button
            onClick={handleBackClick}
            className="mb-4 p-2 bg-red-500 rounded text-white"
          >
            Back
          </button>
          <CustomerDetails customer={selectedCustomer} />
        </div>
      ) : (
        <>
          <div className="bg-white flex justify-between mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="p-2 rounded bg-gray-700 text-white"
            />
            <div className="flex space-x-2">
              <select className="p-2 rounded bg-gray-700 text-white">
                <option>DALLA A ALLA Z</option>
              </select>
              <select className="p-2 rounded bg-gray-700 text-white">
                <option>IN VIAGGIO AL</option>
              </select>
              <select className="p-2 rounded bg-gray-700 text-white">
                <option>DESTINAZIONE</option>
              </select>
            </div>
          </div>
          <div>
            {contacts.map((contact, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 bg-gray-700 rounded mb-2"
              >
                <span
                  className="cursor-pointer"
                  onClick={() => handleCustomerClick(contact)}
                >
                  {contact.name}
                </span>
                <div className="flex space-x-4">
                  {/* mail */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 bg-red-600 p-1 rounded-full text-white "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                    />
                  </svg>
                  {/* phone */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 bg-green-500 p-1 rounded-full text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                    />
                  </svg>
                  {/* contact */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 bg-blue-400 p-1 rounded-full text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                  {/* message */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-8 bg-green-600 p-1 rounded-full text-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Customers;
