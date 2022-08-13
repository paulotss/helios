import React from 'react';

const ClassCard = ({ name, image, id }) => {
  return (
    <article className="text-center m-4">
      <div
        className="border-2 rounded-full w-40 h-40 m-auto bg-cover"
        style={{backgroundImage: `url('${ image }')`}}
      >
      </div>
      <h4 className="text-center mt-4">{ `${id} | ${name}` }</h4>
    </article>
  );
}

export default ClassCard;
