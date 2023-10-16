// Styles
import "./styles/styles.css";

// Dir
import { navigation } from "../../DB/DB";
import { edit, userAvatar } from "../../DB/Images";

const AsideNav = () => {
  return (
    <div className="aside_container">
      <div className="aside_container__information">
        <h2 className="aside_container__information___appname">
          ThrillersTravel
        </h2>
        <div className="avatar">
          <img
            src={userAvatar}
            alt="user image"
            className="aside_container__information___avatar"
          />
          <img src={edit} alt="edit icon" className="edit_icon" />
        </div>
        <p className="aside_container__information___username">ilia jan</p>
      </div>
      <div className="aside_container__navigation">
        <ul>
          {navigation.map(({ name, icon }, idx) => (
            <li key={`${name}-${idx}`}>
              <img src={icon} alt={name} className="nav_icon" /> {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AsideNav;
