import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card/Card";
import { data } from "./data/data";

function App() {
  return (
    <>
      {data.map((item) => {
        return (
          <Card
            key={item.id}
            title={item.title}
            content={item.content}
            href={item.href}
          >
            <img
              src={item.src}
              className={item.img}
              alt=''
            />
          </Card>
        )
      })}
    </>
  );
}

export default App;