/* eslint-disable react/prop-types */
const Course = ({ course }) => {
  const { courseImage, title, shortDescription } = course;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img
            className="h-[250px]"
            src={courseImage}
            alt="Shcourse imageoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{shortDescription}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
