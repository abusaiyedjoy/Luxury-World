
import Catagory from '../Catagory/Catagory';
import Items from '../Items/Items';
import Banner from './../Banner/Banner';

const Home = () => {
  document.title="Luxury World - Home";
  return (
    <div>
      <Banner></Banner>
      <Catagory></Catagory>
      <Items></Items>
    </div>
  );
};

export default Home;
