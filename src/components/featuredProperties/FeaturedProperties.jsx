import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";
const FeaturedProperties = () => {
  const { data, loading, error } = useFetch("/hotel/all/hotels?offset=0&limit=4&featured=true");
  return (
    <div className="fp">
      {loading ? (
        "Loading"
      ) : (
        <>
          {data?.data?.map((item) => (
            <div className="fpItem" key={item._id}>
              <img
                src={`http://localhost:8000/upload/${item.photo}`}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{item.name}</span>
              <span className="fpCity">{item.city}</span>
              <span className="fpPrice">Starting from ${item.cheapestRoom}</span>
              {item.rating && <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
