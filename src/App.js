import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button success rounded outline>
          Click me !!
        </Button>
      </div>
      <div>
        <Button danger outline>
          Some text
        </Button>
      </div>
      <div>
        <Button warning>Some other text</Button>
      </div>
      <div>
        <Button success primary>
          Great buttons
        </Button>
      </div>
      <div>
        <Button>React is awesome</Button>
      </div>
    </div>
  );
}

export default App;
