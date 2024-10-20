import React from "react";
import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-grid">
        <div className="whitespace1"></div>
        <div className="app-title">yatda</div>
        <div className="app-logo">
          <PlaylistAddCheckIcon style={{ fontSize: "100px" }} />
        </div>
        <div className="whitespace2"></div>
        <div className="asterisk-text">Yet Another To Do App</div>
      </div>
    </div>
  );
};

export default Header;
