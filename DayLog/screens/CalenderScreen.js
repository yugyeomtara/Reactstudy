import React, {useContext, useState, useMemo} from 'react';
import LogContext from '../context/LogContext';
import CalendarView from '../components/CalendarView';
import {format} from 'date-fns';
import FeedList from '../components/FeedList';

function CalenderScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {makred: true};
        return acc;
      }, {}),
    [logs],
  );

  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );

  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalenderScreen;
