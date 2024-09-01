import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TagsListProps = {
  tags: string[];
};

const TagsList = ({ tags }: TagsListProps) => {
  return (
    <div
      // className="flex flex-wrap gap-2"

      className={cn("flex flex-wrap gap-4 my-5 w-full")}
    >
      {tags.map((tag) => (
        <Badge key={tag} className="bg-primary text-white">
          {tag}
        </Badge>
      ))}
    </div>
  );
};

export default TagsList;
