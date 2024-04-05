type ITitle = {
  title: string;
};
const Title = ({ title }: ITitle) => {
  return (
    <div className="mb-5 lg:text-start md:text-start text-center">
      <h2 className="lg:text-3xl md:text-2xl text-2xl font-bold uppercase text-slate-900">
        {title}
      </h2>
    </div>
  );
};

export default Title;
