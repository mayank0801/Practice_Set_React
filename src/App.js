import Q1 from "./Components/Q1";
import "./styles.css";
import Q2 from "./Components/Q2";
import Q4 from "./Components/Q4";
import Q5 from "./Components/Q5";
import Q6 from "./Components/Q6";
import Q7 from "./Components/Q7";
export default function App() {
  return (
    <div className="App">
      <h1>Practice Set 5</h1>
      <ul>
        {/* <li style={{listStyle:"none",border:"1px solid Black",padding:"1rem"}}><Q1/></li>
      <li style={{listStyle:"none",border:"1px solid Black",padding:"1rem"}}><Q2/></li>
      <li style={{listStyle:"none",border:"1px solid Black",padding:"1rem"}}><Q4 heading="User Profile" height={"100px"} width={"200px"}/></li> */}

        {/* <li
          style={{
            listStyle: "none",
            border: "1px solid Black",
            padding: "1rem"
          }}
        >
          <Q5 />
        </li> */}

        {/* <li
          style={{
            listStyle: "none",
            border: "1px solid Black",
            padding: "1rem"
          }}
        >
          <Q6 />
        </li> */}

        <Q7 />
      </ul>
    </div>
  );
}
