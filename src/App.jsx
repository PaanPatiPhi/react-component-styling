import "./App.css";
import Button from "./components/Button.jsx"
import Alert from "./components/Alert.jsx"

function App() {
  return (
    <div className="App">
      <div className="button-components-section">
        {/* Render ตัว Button 2 แบบ */}
        <Button type="primary" />
        <Button type="secondary" />
      </div>
      <hr />
      <div className="alert-components-section">
        {/* Render ตัว Alert 4 แบบ */}
        <Alert type ="error">This is error alert box</Alert>
        <Alert type ="warning">This is warning alert box</Alert>
        <Alert type ="info">This is info alert box</Alert>
        <Alert type ="success">This is success alert box</Alert>
      </div>
    </div>
  );
}

export default App;
