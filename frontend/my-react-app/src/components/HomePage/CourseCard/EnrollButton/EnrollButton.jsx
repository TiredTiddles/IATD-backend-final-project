import {Link} from "react-router-dom";

import "./EnrollButton.css";

function EnrollButton({link}) {
  return(
    <Link 
      to={`${link}`}
      className="enroll-button"
    >
      Enroll Now!
    </Link>
  );
}

export default EnrollButton;