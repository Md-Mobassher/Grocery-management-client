import spinner from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-fit mt-20">
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
