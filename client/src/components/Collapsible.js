import React, { useState } from 'react';

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <article className={`collapsible ${isOpen ? 'collapsible-expanded' : 'collapsible-collapsed'}`}>
      <h3 className="h5 collapsible-header flex ai-center jc-between mb-0 w-100" onClick={toggleOpen}>
        <span className="mr-sm">{title}</span>
        <span className="icon-plus text-md">
          {/* You might want to replace the following SVG with an actual plus/minus or open/close icon */}
          <svg className="icon">
            <use xlinkHref={isOpen ? "#icon-minus" : "#icon-plus"} />
          </svg>
        </span>
      </h3>
      {isOpen && <p className="collapsible-content m-0 pt-pb-1">{children}</p>}
    </article>
  );
};

export default Collapsible;
