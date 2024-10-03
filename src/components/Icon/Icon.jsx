import { FaRegCircle, FaTimes, FaPen } from 'react-icons/fa';
import './Icon.css'; 

function Icon({ name }) {
    let iconClass = "icon";

    if (name === "circle") {
        iconClass += " circle"; 
        return <FaRegCircle className={iconClass} />;
    } else if (name === "cross") {
        iconClass += " cross"; 
        return <FaTimes className={iconClass} />;
    } else {
        iconClass += " pen"; 
        return <FaPen className={iconClass} />;
    }
}

export default Icon;
