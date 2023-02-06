import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success rounded outline className="mb-5" onClick={handleClick}>
          <GoBell />
          Click me !!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Some text
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Some other text
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Great buttons
        </Button>
      </div>
      <div>
        <Button primary rounded>
          React is awesome
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
