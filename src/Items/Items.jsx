
import useJsonData from "../JSON/jsonData";
import ItemCard from './itemCard';


const Items = () => {
  const { data, loading } = useJsonData();

  // Handle loading state
  if(loading){
    return <div className="flex justify-center items-center h-screen"><span className="loading  loading-spinner loading-success loading-lg"></span></div> 
}

  return (
    <div>
      <h1 data-aos="fade-up"
     data-aos-duration="2000" className="text-5xl font-bold text-center my-12 text-gray-50">Our Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <ItemCard key={item.id} item={item} /> 
           ))}
      </div>
    </div>
  );
};

export default Items;
