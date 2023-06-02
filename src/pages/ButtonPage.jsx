import Button from "../components/Button";
import {VscBell, VscAccount} from "react-icons/vsc"


const ButtonPage = () => {
    return (
        <div>
            <Button success rounded> <VscBell /> Click Me!</Button>
            <Button danger outline > <VscAccount /> Click None!</Button>
            <Button secondary outline > <VscAccount /> secondaryOutline</Button>
            <Button secondary rounded> <VscAccount />secondaryRounded</Button>
        </div>
    );
}

export default ButtonPage;