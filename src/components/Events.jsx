import { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 101,
      name: 'event1',
      description: 'description1',
      date: '10-12-2015',
      students: [],
    },
    {
      id: 102,
      name: 'event2',
      description: 'description2',
      date: '10-12-2015',
      students: [],
    },
    {
      id: 103,
      name: 'event3',
      description: 'description3',
      date: '10-12-2015',
      students: [],
    },
    {
      id: 104,
      name: 'event4',
      description: 'description4',
      date: '10-12-2015',
      students: [],
    },
    {
      id: 105,
      name: 'event5',
      description: 'description5',
      date: '10-12-2015',
      students: [],
    },
  ]);

  const [student, setStudent] = useState({ id: '', name: '', eventid: '' });

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleValues = () => {
    if (student.id == '' || student.name == '' || student.eventid == '') {
      return false;
    } else {
      return true;
    }
  };

  const handleRegister = () => {
    if (!handleValues()) {
      alert('Please enter all values');

      return;
    }
    events.map((event) => {
      if (event.id == student.eventid) {
        event.students.push(student);
      }
    });
    setStudent({ id: '', name: '', eventid: '' });
  };

  return (
    <div>
      <hr />
      <h3>Events</h3>
      <ul>
        {events.map((event, index) => {
          return (
            <li key={index}>
              {event.id} {event.name} {event.description} {event.date}{' '}
              {event.students?.map((student, index) => {
                return (
                  <p key={index}>
                    {' '}
                    {student.id} {student.name}
                  </p>
                );
              })}
            </li>
          );
        })}
      </ul>
      <hr />
      <h3>Register</h3>
      id:
      <input
        type="text"
        name="id"
        value={student.id}
        onChange={(e) => handleInput(e)}
      />
      <br />
      Name:
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={(e) => handleInput(e)}
      />
      <br />
      Event ID:{' '}
      <input
        type="text"
        name="eventid"
        value={student.eventid}
        onChange={(e) => handleInput(e)}
      />
      <br />
      <button type="button" onClick={handleRegister}>
        Register
      </button>
      <hr />
      <h3>Registered events</h3>
      <ul>
        {events.map((event, index) => {
          if (event.students.length > 0) {
            return (
              <li key={index}>
                {event.id} {event.name} {event.students.length}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
};
export default Events;
