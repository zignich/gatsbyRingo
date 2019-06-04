import React from 'react';

export default function PageFooter() {
  var n =  new Date();
  var y = n.getFullYear();

  return (
    <div id="footer">
      <ul className="copyright">
        <li>&copy; Шотокан Каратэ Клуб Ringo</li>
        <li>2009 - {y}</li>
      </ul>
    </div>
  );
}
