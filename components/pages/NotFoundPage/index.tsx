import Link from "next/link";
import Image from "next/image";
import { Typography } from "@/components/shared/Typography";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950 min-h-screen">
      <div className="mx-auto flex flex-col-reverse items-center gap-8 md:flex-row md:gap-12 app-container">
        <div className="flex flex-1 flex-col items-center justify-center space-y-4 text-center md:items-start md:text-left">
          <Typography
            variant="h2"
            className="text-4xl font-bold tracking-tighter sm:text-5xl"
          >
            Oops! Page not found.
          </Typography>
          <p className="text-gray-500 dark:text-gray-400">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Let&apos;s get you back on track.
          </p>
          <Link
            href="/"
            className="text-white inline-flex h-10 items-center justify-center rounded-md px-6 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 bg-primary hover:bg-primary-dark"
            prefetch={false}
          >
            Go to Homepage
          </Link>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            src="/images/banners/not-found.png"
            width={500}
            height={500}
            alt="404 Illustration"
            className="max-w-[300px] sm:max-w-[400px] md:max-w-[500px]"
            style={{ aspectRatio: "500/500", objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
