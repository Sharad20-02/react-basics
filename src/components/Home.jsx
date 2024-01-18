import { useContext } from "react"
import { countContext } from "../App"

const Home = () => {
  const value = useContext(countContext);
  return (
    <div>Home {value}</div>
  )
}
export default Home