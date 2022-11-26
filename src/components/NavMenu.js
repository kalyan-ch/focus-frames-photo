import { useState } from "react";


const NavMenu = (props) => {

  const { items } = props;

  const [activeItems, setActiveItems] = useState(new Array(items.length).fill(false));

  const handleToggle = (index) => {
    const newActiveItems = new Array(items.length).fill(false);
    newActiveItems[index] = true;
    setActiveItems(newActiveItems);
  }

  const renderMenuItems = () => {
    return items.map(item => {
      const isActive = activeItems[item.index];
      return (
        <a
          href={`${item.link ? item.link : '#'}`}
          key={item.index}
          onClick={() => handleToggle(item.index)}
          className={`${isActive ? 'active' : ''} item`}
          target={`${item.link ? '_blank' : '_self'}`}>
          {item.type === 'text' ? item.name : <i className="instagram icon"></i>}
        </a>);
    })
  };


  return (
    <div>
      <div className="ui top fixed inverted menu">
        {renderMenuItems()}
      </div>
    </div>
  );
};

export default NavMenu;