import spinner from "../../assets/loading.gif";

const Loading = () => {
  return (
    <div className="flex justify-center items-center w-full h-60">
      <img className="size-16" src={spinner} alt="Loading" />
    </div>
  );
};

export default Loading;
