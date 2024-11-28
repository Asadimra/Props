import CarCard from "./CarCard";
const Hero = () => {
  const car = [
    {
      carname: "Toyota Corolla",
      price: "PKR 59.7-75.5 Lacs",
      review: "1000 Review",
      image: "/corolla.jpg",
    },
    {
      carname: "Suzuki Alto",
      price: "PKR 23.3-30.5 Lacs",
      review: "2000 Review",
      image: "/alto.png",
    },
    {
      carname: "Honda City",
      price: "PKR 46.5-58.5 Lacs",
      review: "1000 Review",
      image: "/Honda.jpg",
    },
    {
      carname: "Honda Civic",
      price: "PKR 86.6-90.0 Lacs",
      review: "2000 Review",
      image: "/Civic.jpg",
    },
  ];
  return (
    <div className="flex flex-col md:items-center lg:flex-row lg:justify-around ">
      {car.map((Boss,index) => {
        return (
          <CarCard
            key={index}
            Name={Boss.carname}
            price={Boss.price}
            review={Boss.review}
            image={Boss.image}
          /> 
        );
      })}
    </div>
  );
};
export default Hero;
