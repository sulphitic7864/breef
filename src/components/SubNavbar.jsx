// components/SubNavbar.jsx
import { useState } from 'react';

const SubNavbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState("Invisible");

  const accountLinks = [
    { name: "View Profile", type: "link" },
    { name: "My Settings", type: "link" },
    { name: "Transaction", type: "link" },
    { name: "Financial Accounts", type: "link" },
    { name: "Membership", type: "link" },
    { name: "My TopCreative", type: "link" },
    { name: "Invisible", type: "status", color: "bg-gray-400" },
    { name: "visible", type: "status", color: "bg-green-500" },
    { name: "Busy", type: "status", color: "bg-red-500" },
    { name: "Away", type: "status", color: "bg-yellow-500" },
  ];

  const getStatusColor = (statusName) => {
    const status = accountLinks.find(item => item.type === "status" && item.name === statusName);
    return status ? status.color : "bg-gray-400";
  };

  const handleStatusChange = (statusName) => {
    setCurrentStatus(statusName);
    setIsDropdownOpen(false);
  };

  const handleLinkClick = (linkName) => {
    setIsDropdownOpen(false);
    console.log(`Navigating to: ${linkName}`);
  };

  const handleHomeClick = () => {
    console.log("Navigating to Home");
    // Add navigation logic here
  };

  const handleHelpClick = () => {
    console.log("Help clicked");
  };

  const handleLogoutClick = () => {
    console.log("Logging out...");
    // Add logout logic here
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom py-3">
      <div className="container">
        {/* Breadcrumb - Left Side */}
        <div className="navbar-nav">
          <div className="d-flex align-items-center">
            <button 
              className="btn btn-link nav-link p-0 text-decoration-none text-muted"
              onClick={handleHomeClick}
            >
              Home
            </button>
            <span className="mx-2 text-muted">&gt;</span>
            <span className="fw-bold">Work Room</span>
          </div>
        </div>

        {/* Right Side - Client Name, Account Dropdown, Help, Logout */}
        <div className="navbar-nav ms-auto d-flex align-items-center">
          {/* Client Name */}
          <span className="nav-item me-3">Hi, AliAkin</span>
          
          {/* Account Dropdown */}
          <div className="nav-item dropdown me-3">
            <button
              className="btn btn-link nav-link dropdown-toggle d-flex align-items-center p-0"
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <span className="me-1">Account</span>
              <div 
                className={`rounded-circle ${getStatusColor(currentStatus)} ms-1`}
                style={{ width: '8px', height: '8px' }}
                title={currentStatus}
              ></div>
            </button>

            {isDropdownOpen && (
              <div 
                className="dropdown-menu show position-absolute"
                style={{ zIndex: 1000 }}
              >
                {/* Account Info Section */}
                <div className="px-3 py-2 border-bottom">
                  <div className="fw-bold">AliAkin Account</div>
                  <div className="d-flex align-items-center mt-1">
                    <div 
                      className={`rounded-circle ${getStatusColor(currentStatus)} me-2`}
                      style={{ width: '8px', height: '8px' }}
                    ></div>
                    <small className="text-muted">{currentStatus}</small>
                  </div>
                </div>

                {/* Links Section */}
                <div>
                  {accountLinks
                    .filter(item => item.type === "link")
                    .map((link, index) => (
                      <button
                        key={index}
                        className="dropdown-item"
                        onClick={() => handleLinkClick(link.name)}
                      >
                        {link.name}
                      </button>
                    ))
                  }
                </div>

                {/* Status Section */}
                <div className="border-top">
                  <div className="dropdown-header small">Status</div>
                  {accountLinks
                    .filter(item => item.type === "status")
                    .map((status, index) => (
                      <button
                        key={index}
                        className="dropdown-item d-flex align-items-center"
                        onClick={() => handleStatusChange(status.name)}
                      >
                        <div 
                          className={`rounded-circle ${status.color} me-2`}
                          style={{ width: '8px', height: '8px' }}
                        ></div>
                        <span className={currentStatus === status.name ? 'fw-bold' : ''}>
                          {status.name}
                        </span>
                      </button>
                    ))
                  }
                </div>
              </div>
            )}
          </div>

          {/* Separator */}
          <span className="nav-item text-muted mx-2">|</span>

          {/* Help Link */}
          <button 
            className="btn btn-link nav-link p-0 me-3"
            onClick={handleHelpClick}
          >
            Help
          </button>

          {/* Separator */}
          <span className="nav-item text-muted mx-2">|</span>

          {/* Logout Link */}
          <button 
            className="btn btn-link nav-link p-0 text-danger"
            onClick={handleLogoutClick}
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SubNavbar;