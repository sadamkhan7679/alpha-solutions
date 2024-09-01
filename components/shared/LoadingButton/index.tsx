import { Button, ButtonProps } from "@/components/ui/button";
import { Loader } from "lucide-react";

type LoadingButtonProps = ButtonProps & {
  loading: boolean;
};

export const LoadingButton = ({
  loading,
  children,
  ...props
}: LoadingButtonProps) => {
  return (
    <Button {...props} disabled={loading}>
      {children}
      {loading ? <Loader className="mr-2" /> : null}
    </Button>
  );
};
