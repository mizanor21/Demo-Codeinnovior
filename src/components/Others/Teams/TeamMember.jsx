/* eslint-disable react/prop-types */
const TeamMember = ({ member }) => {
  const { name, image, designation } = member;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamMember;
