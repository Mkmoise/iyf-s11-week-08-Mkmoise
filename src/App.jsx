import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostCard from "./components/PostCard";
import Button from "./components/Button";
import Card from "./components/Card";
import Layout from "./components/Layout";


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


  return (
 
   <Layout>

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
    
    <Layout/>
  );
}

export default App;
