export type ListSectionProps = {
  title: string;
  items: { label: string; link: string }[];
};

const ListSection: React.FC<ListSectionProps> = ({ title, items }) => {
  return (
    <div>
      <h4 className="text-2xl font-bold mb-3 uppercase text-green-400">
        {title}
      </h4>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            className="text-lg hover:text-green-500 hover:font-bold"
          >
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSection;
