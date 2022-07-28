import React from 'react';

const ClassCard = ({ name, id }) => {
  return (
    <article>
      <div>
        <img src="https://nova-acropole.org.br/wp-content/uploads/2019/01/cropped-logonaface.png" alt="" />
      </div>
      <h4>{ `${id} | ${name}` }</h4>
    </article>
  );
}

export default ClassCard;
