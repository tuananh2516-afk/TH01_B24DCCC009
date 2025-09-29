import TextCounter from "./Bai1/CounterText";
import TrafficLight from "./Bai2/Traficlight";
import WorkList from "./Bai3/WorkList";
import GioHang from "./Bai4/GioHang";
import FormDK from "./Bai5/FormDK";
import './App.css';
function App() {
  return (
    <div>
      <h1 style={{textAlign: "center"}}>Bài tập thực hành ReactJS</h1>
      <ul>
        <strong>Bài 1</strong><TextCounter />
        <strong>Bài 2</strong><TrafficLight />
        <strong>Bài 3</strong><WorkList />
        <strong>Bài 4</strong><GioHang />
        <strong>Bài 5</strong><FormDK />
      </ul>
    </div>
  );
}
export default App;