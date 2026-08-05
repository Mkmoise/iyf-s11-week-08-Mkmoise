import Header from "./components/Header";


function App() {
  const today = new Date().toDateString();
  const hour = new Date().getHours();

  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  return (
    <div>
      <h1>Moise Nyarugabo</h1>

      <p>I am a beginner learning React.</p>

      <p>I enjoy programming and learning new technologies.</p>

      <p>My goal is to become a full-stack web developer.</p>

      <h2>Today's Date</h2>
      <p>{today}</p>

      <h2>{greeting}</h2>
    </div>
  );
}

export default App;
