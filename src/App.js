import Button from "./Button";

function App() {
  return (
    <div>
      <div>
        <Button primary rounded outline>
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Buy now!
        </Button>
      </div>
      <div>
        <Button success>See deal!</Button>
      </div>
      <div>
        <Button warning outline>
          Hide Ads!
        </Button>
      </div>
      <div>
        <Button outline rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
