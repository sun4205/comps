import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("click");
  };
  return (
    <div>
      <div>
        <Button primary rounded outline className="mb-5" onClick={handleClick}>
          <GoBell className="mr-1" />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoCloudDownload className="mr-1" />
          Buy now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoDatabase className="mr-1" />
          See deal!
        </Button>
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

export default ButtonPage;
