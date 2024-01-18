import { useContext } from "react";
import { countContext } from "../App";

const Contact = () => {
  const value = useContext(countContext);
  return <div>Contact {value}</div>;
};
export default Contact;
