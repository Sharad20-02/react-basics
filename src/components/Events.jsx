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

  const [student, setStudent] = useState({
    id: '',
    name: '',
    eventid: '',
    gender: '',
    sem: '',
  });

  const handleInput = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleValues = () => {
    if (
      student.id == '' ||
      student.name == '' ||
      student.eventid == '' ||
      student.gender == '' ||
      student.sem == ''
    ) {
      console.log(student);
      alert('Please enter all values');
      return false;
    } else {
      if (parseInt(student.eventid) > 105 || parseInt(student.eventid) < 101) {
        alert('enter correct eventid');
        return false;
      }
      return true;
    }
  };

  const handleRegister = () => {
    if (!handleValues()) {
      setStudent({ id: '', name: '', eventid: '', sem: '', gender: '' });
      return;
    }
    events.map((event) => {
      if (event.id == student.eventid) {
        event.students.push(student);
      }
    });
    setStudent({ id: '', name: '', eventid: '', sem: '', gender: '' });
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
                    {student.id} {student.name} {student.gender} {student.sem}
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
        type="number"
        name="eventid"
        value={student.eventid}
        onChange={(e) => handleInput(e)}
      />
      <br />
      Gender:
      <label htmlFor="">
        Male:
        <input type="radio" name="gender" value="male" onChange={handleInput} />
      </label>
      <br />
      <label htmlFor="">
        Female:
        <input
          type="radio"
          name="gender"
          value="female"
          onChange={handleInput}
        />
      </label>
      <br />
      <label htmlFor="">
        Semester:
        <select name="sem" id="" value={student.sem} onChange={handleInput}>
          <option value="">Select sem</option>
          <option value="1">1</option>
          <option value="2">2</option>
        </select>
      </label>
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
