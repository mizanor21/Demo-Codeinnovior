import TeamMember from "./TeamMember";

const TeamMembers = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      designation: "Software Engineer",
      image: "https://www.codeinnovior.com/assets/images/1.jpeg",
    },
    {
      name: "Bob Smith",
      designation: "Project Manager",
      image: "https://www.codeinnovior.com/assets/images/Formal_1.jpg",
    },
    {
      name: "Charlie Brown",
      designation: "Data Scientist",
      image: "https://www.codeinnovior.com/assets/images/3.2.jpg",
    },
    {
      name: "Diana Ross",
      designation: "UI/UX Designer",
      image:
        "https://www.codeinnovior.com/assets/images/Mahmuda%20Akter%20Soni.jpg",
    },
    {
      name: "Edward King",
      designation: "DevOps Engineer",
      image: "https://www.codeinnovior.com/assets/images/5.jpeg",
    },
    {
      name: "Fiona Green",
      designation: "Product Manager",
      image: "https://www.codeinnovior.com/assets/images/6.jpg",
    },
    {
      name: "George White",
      designation: "QA Engineer",
      image: "https://www.codeinnovior.com/assets/images/Afjal-01-01-01.jpeg",
    },
    {
      name: "Helen Black",
      designation: "Content Strategist",
      image: "https://www.codeinnovior.com/assets/images/Manisha-04.jpg",
    },
  ];
  return (
    <div className="container mx-auto max-w-[1200px] my-10">
      <h2 className="text-3xl mb-5">Meet Our Team</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 ">
        {teamMembers.map((member, index) => (
          <TeamMember key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
