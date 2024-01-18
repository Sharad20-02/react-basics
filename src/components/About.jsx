import { useContext } from 'react';
import { countContext } from '../App';

const About = () => {
  const value = useContext(countContext);
  return <div>About {value}</div>;
};
export default About;
