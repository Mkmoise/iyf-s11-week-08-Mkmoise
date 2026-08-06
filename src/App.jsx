import { useState } from "react";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";
import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./components/Layout";
import UserGreeting from "./components/UserGreeting";

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

const posts = [
  {
    id: 1,
    title: "Getting Started with React",
    excerpt: "Learning React step by step.",
    author: "Moise",
    date: "Aug 2026"
  },
  {
    id: 2,
    title: "JavaScript Basics",
    excerpt: "JavaScript is the foundation of React.",
    author: "Moise",
    date: "Aug 2026"
  },
  {
    id: 3,
    title: "My Programming Journey",
    excerpt: "Every project helps me improve.",
    author: "Moise",
    date: "Aug 2026"
  }
];

const isLoggedIn = true;
const [count, setCount] = useState(0);
const [isOn, setIsOn] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [age, setAge] = useState(0);

  return (
 
   <Layout>
     <h2>Counter: {count}</h2>
    
      <button onClick={() => setCount(count + 1)}>
  Increment
</button>
<button onClick={() => setCount(count - 1)}>
  Decrement
</button>

<button onClick={() => setCount(0)}>
  Reset
</button>

<h2>Toggle Switch</h2>

<p>The switch is {isOn ? "ON" : "OFF"}</p>

<button onClick={() => setIsOn(!isOn)}>
  Toggle
</button>

     {isLoggedIn && <p>Welcome back!</p>}
     <p>{isLoggedIn ? "Logged In" : "Please Log In"}</p>
     <UserGreeting user={{ name: "Moise" }} />
    
      <Sidebar/>
      <h1>Moise Nyarugabo</h1>

      <p>I am a beginner learning React.</p>

      <p>I enjoy programming and learning new technologies.</p>

      <p>My goal is to become a full-stack web developer.</p>

      <h2>Today's Date</h2>
      <p>{today}</p>

      <h2>{greeting}</h2>

      <div>
  {posts.map((post) => (
    <PostCard
      key={post.id}
      title={post.title}
      excerpt={post.excerpt}
      author={post.author}
      date={post.date}
    />
  ))}
</div>      

      <Card title="Welcome">
  <p>This is my first React Card component.</p>
</Card>
      <Button/>
      </Layout>    

  );
}

export default App;
