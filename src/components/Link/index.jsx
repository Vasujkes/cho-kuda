import React from "react";


const Link = ({ active, children, onClick }) => (
  <div onClick={onClick} disabled={active}>
  {children}
</div>
 
);

export default Link;
