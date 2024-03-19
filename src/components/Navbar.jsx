// import "./header.css";

export const pippo = () => {
  console.log("pippo");
  return (
    <React.Fragment>
      <h1>Ciao</h1>

      <div>
        <img
          src="https://www.zohowebstatic.com/sites/zweb/images/zoho_general_pages/zohologowhitebg.svg"
          alt=""
        />
      </div>
      <div>
        <ul className="header-links">
          <li>Home</li>
          <li>Contatti</li>
          <li>Q&A</li>
          <li>About Us</li>
        </ul>
      </div>
    </React.Fragment>
  );
};
