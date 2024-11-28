const CarCard = (Props: any) => {
  return (
    <div className="mt-10 w-full md:w-4/12 lg:w-2/12  border border-sky-300">
      <div>
        <img src={Props.image} alt="" />
      </div>
      <h1 className="text-blue-700 font-semibold flex justify-center">
        {Props.Name}
      </h1>
      <h2 className="text-green-400 flex justify-center">{Props.price}</h2>
      <h3 className="flex justify-center text-gray-400">{Props.review}</h3>
    </div>
  );
};
export default CarCard;
