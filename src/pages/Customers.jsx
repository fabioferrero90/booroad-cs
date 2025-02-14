const contacts = [
  { name: 'FRANCO ROSSETTI' },
  { name: 'GIACOMO NICOLINI' },
  { name: 'FRANCO ROSSETTI' },
  { name: 'GIACOMO NICOLINI' },
];

const Customers = () => {
  return (
    <div className="p-6 bg-white text-white">
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
          <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded mb-2">
            <span>{contact.name}</span>
            <div className="flex space-x-4">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Customers;
