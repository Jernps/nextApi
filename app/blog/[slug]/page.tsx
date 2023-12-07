import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <h1> Page : {params.slug}</h1>
    </div>
  );
};

export default page;
