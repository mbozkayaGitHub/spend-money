


import React from "react";
import "./Header.css"
const Header = ({ money, total }) => {
  return (
    <div className="header" >
      {(total > 0 && <>Harcayamak için <span>${money - total}</span>  paranız kaldı.</>) || (
        <>Harcamak için ${money} paranız var. </>
      )}
    </div>
  );
};
export default Header;