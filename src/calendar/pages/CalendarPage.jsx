import { Navbar } from '../components/Navbar';
import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { localizer } from '../../helpers/calendarLocalizer';
import { getMessagesES } from '../../helpers/getMessages';
import { CalendarEvent } from '../components/CalendarEvent';
import { CalendarModal } from '../components/CalendarModal';

const events = [
    {
        title: 'cumpleaños del jefe',
        notes: 'Hay que comprar el pastel',
        start: new Date(),
        end: addHours(new Date(), 2),
        bgColor: '#fafafa',
        user: {
            _id: '123',
            name: 'Omar',
        },
    },
];

export const CalendarPage = () => {
    const eventStyleGetter = (event, start, end, isSelected) => {
        // console.log({ event, start, end, isSelected });

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white',
        };

        return style;
    };

    return (
        <>
            <Navbar />

            <div>
                <Calendar
                    culture='es'
                    localizer={localizer}
                    events={events}
                    startAccessor='start'
                    endAccessor='end'
                    style={{ height: '100vh' }}
                    // style={{ height: 'calc(100vh-80px)' }}
                    messages={getMessagesES()}
                    eventPropGetter={eventStyleGetter}
                    components={{
                        event: CalendarEvent,
                    }}
                />

                <CalendarModal />
            </div>
        </>
    );
};
