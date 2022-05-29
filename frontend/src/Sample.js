import React, { useState } from "react";
import { FaAngleUp} from 'react-icons/fa';
import { FaAngleDown} from 'react-icons/fa';

import './App.css';
const Sample = ({data}) => {
    const [menu,setMenu] = useState({});
    const up = '&#708;'
    return (
        <div>
            <ul>
            {data.map((item) => (
          <li key={item.title}>
            {item.title}
            {item.items.length !== 0 && (
              <button
                onClick={() =>
                  setMenu({
                    ...menu,
                    [item.title]: !menu[item.title],
                  })
                }
              >
                {menu[item.title] ? <FaAngleUp /> : <FaAngleDown />}
              </button>
            )}

            {menu[item.title] && item.items && (
              <Sample data={item.items} />
            )}
          </li>
        ))}
            </ul>
        </div>
    )
}
export default Sample;