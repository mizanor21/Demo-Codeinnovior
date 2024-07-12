import Banner from "../Others/Banner/Banner";
import Contact from "../Others/Contact/Contact";
import Courses from "../Others/Courses/Courses";
import TeamMembers from "../Others/Teams/TeamMembers";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Courses></Courses>
      <TeamMembers></TeamMembers>
      <Contact></Contact>
    </div>
  );
};

export default Home;
