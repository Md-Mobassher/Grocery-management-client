export type ListSectionProps = {
  title: string;
  items: { label: string; link: string }[];
};

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => {
  return (
    <div className="">
      <h4 className="text-2xl font-bold mb-3 uppercase text-green-500">
        {title}
      </h4>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="hover:font-semibold hover:text-green-500 hover:pl-2 transition-all duration-300"
          >
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
