import { CompanyLogo } from "@/icons/logo/full-logo";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/10 backdrop-blur-md">
      <CompanyLogo
        className="text-primary animate-scaleUp"
        width={400}
        height={200}
      />
    </div>
  );
};

export default Loader;
