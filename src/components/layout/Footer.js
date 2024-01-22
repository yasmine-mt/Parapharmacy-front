import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faGraduationCap, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <p className="footer-line">
        <FontAwesomeIcon icon={faUser} /> Developed by: Yasmine Maataoui & Niama Rachad
      </p>
      <p className="footer-line">
      <FontAwesomeIcon icon={faGraduationCap} /> Class:4 IIR8
      </p>
      <p className="footer-line">
        <FontAwesomeIcon icon={faChalkboardTeacher} /> Supervised by:Prof Nouhaila Bensalah
      </p>
    </div>
  );
};

export default Footer;
