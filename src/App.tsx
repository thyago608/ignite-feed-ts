import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post";
import { posts } from "./mock";
import styles from "./App.module.css";
import "./styles/global.css";

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <section>
          {posts.map((item) => (
            <Post key={item.id} data={item} />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
