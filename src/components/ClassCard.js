import React from 'react';

const ClassCard = ({ name, id }) => {
  return (
    <article className="text-center">
      <div
        className="border-2 rounded-full w-40 h-40 m-auto bg-cover"
        style={{backgroundImage: "url('https://nova-acropole.org.br/wp-content/uploads/2019/01/cropped-logonaface.png')"}}
      >
      </div>
      <h4 className="text-center mt-4">{ `${id} | ${name}` }</h4>
    </article>
  );
}

export default ClassCard;
