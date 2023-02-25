import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Simple version, including a "bug" that will never happen, if an user clicks on the div using :
  // inspect, get currentDiv=$0 in browser, then double click using $0.click(); $0.click();
  // rerendering didn't yet happen and state changed
  /*
  const handleClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };
  */

  // Functional version, fixing the "bug"
  const handleClick = (index) => {
    console.log("STALE version of expandedIndex", expandedIndex);
    setExpandedIndex((currentExpandedIndex) => {
      // try running $0.click(); $0.click(); to notice the fixed "bug"
      console.log("UP TO DATE version", currentExpandedIndex);
      if (currentExpandedIndex === index) {
        return -1;
      } else {
        return index;
      }
    });
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );

    // React doesnt print booleans, null, undefined
    // conditional rendering based on isEpxanded value
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
