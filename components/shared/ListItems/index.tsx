import { ArrowIcon } from "@/icons/common/arrowIcon";

type ListItemsProps = {
  heading?: string;
  summary?: string;
  items: string[];
};

const ListItems = ({ heading, summary, items }: ListItemsProps) => {
  return (
    <div className="py-10">
      {heading && <h1 className="text-heading">{heading}</h1>}

      {summary && <p className="text-body mb-5 text-justify">{summary}</p>}
      <ul>
        {items.map((item, index) => (
          <li
            key={index + item}
            className="text-caption flex items-center w-full flex-wrap mb-5"
          >
            <ArrowIcon
              className="mr-5 text-primary dark:text-white"
              width={24}
              height={24}
            />{" "}
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
