import React, { useState, useEffect } from 'react';
import { it } from 'date-fns/locale';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addMonths, subMonths, isBefore, isAfter, isWithinInterval } from 'date-fns';
import { useDataContext } from '../context/DataContext'; // Ensure the correct import for useDataContext

const Calendar = () => {

  const { data } = useDataContext();
  const { travels } = data;
  const [currentDate, setCurrentDate] = useState(new Date());
  const [days, setDays] = useState([]);

  useEffect(() => {
    const start = startOfMonth(currentDate);
    const end = endOfMonth(currentDate);
    const daysArray = eachDayOfInterval({ start, end });
    setDays(daysArray);
  }, [currentDate]);

  const renderTripPills = (day) => {
    return travels.map((travel, index) => {
      const startDate = new Date(travel.start_date);
      const endDate = new Date(travel.end_date);

      // Ensure the trip is within the current month
      if (isBefore(endDate, startOfMonth(currentDate)) || isAfter(startDate, endOfMonth(currentDate))) {
        return null;
      }

      let destinationName = "null";
      for (const destination of data.destinations) {
        if (destination.destination_id == travel.destination_id) {
          destinationName = destination.destination_name;
        }
      }

      if (isWithinInterval(day, { start: (startDate - (24*60*60*1000)), end: endDate })) {
        return (
          <div
            key={`${index}-${format(day, 'yyyy-MM-dd')}`}
            className="bg-green-200 text-green-800 p-1 rounded mb-1 cursor-pointer"
          >
            {destinationName}
          </div>
        );
      }
      return null;
    });
  };

  const handlePreviousMonth = () => {
    setCurrentDate(subMonths(currentDate, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(addMonths(currentDate, 1));
  };

  return (
    <div className="calendar p-4 relative">
      <div className="flex justify-between items-center mb-4">
        <button onClick={handlePreviousMonth} className="bg-gray-300 text-gray-800 p-2 rounded cursor-pointer">Precedente</button>
        <h2 className="text-2xl font-bold">{format(currentDate, 'MMMM yyyy', {locale: it})}</h2>
        <button onClick={handleNextMonth} className="bg-gray-300 text-gray-800 p-2 rounded cursor-pointer">Successivo</button>
      </div>
      <div className="calendar-grid grid grid-cols-7 gap-4 relative">
        {days.map((day, index) => (
          <div key={index} className="calendar-day border p-2 rounded relative">
            <span className="block text-lg font-semibold mb-2">{format(day, 'd')}</span>
            {renderTripPills(day)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;