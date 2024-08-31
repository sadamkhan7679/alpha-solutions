import { ArrowIcon } from "@/icons/common/arrowIcon";
import { cn } from "@/lib/utils";

type ListItemsProps = {
  heading?: string;
  summary?: string;
  items: string[];
  itemClassName?: string;
};

const ListItems = ({
  heading,
  summary,
  items,
  itemClassName,
}: ListItemsProps) => {
  return (
    <div className="py-10">
      {heading && <h1 className="text-heading">{heading}</h1>}

      {summary && <p className="text-body mb-5 text-justify">{summary}</p>}
      <ul>
        {items.map((item, index) => (
          <li
            key={index + item}
            className={cn(
              "text-caption flex items-start w-full mb-5",
              itemClassName,
            )}
          >
            <ArrowIcon className="mr-5" width={24} height={24} /> {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItems;
