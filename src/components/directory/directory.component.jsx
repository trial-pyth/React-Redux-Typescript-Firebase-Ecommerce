import DirectoryItem from "../directory-item/directory-item.component";
import "./directory.styles.scss";
const categories = [
  {
    id: 1,
    title: "kits",
    imageUrl: "https://i.ibb.co/RhbbyjR/kit.jpg",
    route: "shop/kits",
  },
  {
    id: 2,
    title: "football",
    imageUrl: "https://i.ibb.co/tmSqZQf/footbal-scene-21730-11060.jpg",
    route: "shop/ball",
  },
  {
    id: 3,
    title: "shoes",
    imageUrl: "https://i.ibb.co/f1vj4m8/shoes.jpg",
    route: "shop/shoes",
  },
  {
    id: 4,
    title: "training",
    imageUrl: "https://i.ibb.co/g9WRhDD/training.jpg",
    route: "shop/training",
  },
  {
    id: 5,
    title: "accessories",
    imageUrl: "https://i.ibb.co/CvXX4Bs/accessories.jpg",
    route: "shop/accessories",
  },
];
const Directory = () => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return <DirectoryItem key={category.id} category={category} />;
      })}
    </div>
  );
};

export default Directory;
