import "../../assets/styles/home.css";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <div className="home">
      <div className="home_wrapper">
        <h1>Welcome to MyCO<sub style={{color: "yellow"}}>2</sub>Flight.</h1>
        <h3>
          For many years, one very acute question has been haunting the whole world.
          Global warming.
          We understand that air transport is an integral part of our lives.
          It is one of the safest and fastest modes of transport.
          But it is also a source of pollution.
        </h3>
        <h3>How much CO<sub style={{color: "yellow"}}>2</sub> is emitted into the atmosphere on each flight?</h3>
        <h3>Interested?</h3>
        <h4><Link to='/add_flight'>Let's count</Link></h4>
      </div>
    </div>
  );
}
