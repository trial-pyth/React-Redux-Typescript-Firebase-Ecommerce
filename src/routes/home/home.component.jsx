import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/directory.component";

const Home = () => {
  const categories = [
    {
      id: 1,
      title: "kits",
      imageUrl: "https://i.ibb.co/RhbbyjR/kit.jpg",
    },
    {
      id: 2,
      title: "football",
      imageUrl: "https://i.ibb.co/tmSqZQf/footbal-scene-21730-11060.jpg",
    },
    {
      id: 3,
      title: "shoes",
      imageUrl: "https://i.ibb.co/f1vj4m8/shoes.jpg",
    },
    {
      id: 4,
      title: "training",
      imageUrl: "https://i.ibb.co/g9WRhDD/training.jpg",
    },
    {
      id: 5,
      title: "accessories",
      imageUrl: "https://i.ibb.co/CvXX4Bs/accessories.jpg",
    },
  ];
  return (
    <div>
      <Outlet />
      <Directory categories={categories} />
    </div>
  );
};

export default Home;
