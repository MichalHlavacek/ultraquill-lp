import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Get SEO Articles That Actually Rank | UltraQuill" },
    { rel: "icon", href: "/favicon.png" }
  ];
};

export default function Index() {
  return (
    <div id="main-wrapper">
      <section className="min-h-screen flex flex-col">
        <div className="w-full py-5 px-4 lg:px-10 flex-grow">
          <div className="py-20 text-center">
            <a className="logo w-20 h-20 block mx-auto mb-4 p-4 bg-white rounded-full" href="/" title="UltraQuill">
              <img src="/quill.svg" alt="UltraQuill" width={64} />
            </a>
            <h1 className="text-3xl md:text-5xl text-yellow-300 bg-black dark:bg-yellow-300 dark:text-black font-bold rounded-xl px-5 py-3 inline-block mb-6">
                We&apos;re Coming Soon!
            </h1>
            <h2 className="text-xl md:text-3xl font-semibold mb-4">
                Get SEO Articles That Actually Rank
            </h2>
          </div>
          <div className="md:w-2/3 lg:w-1/3 mx-auto text-center">
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-300 mb-6">
            🎉 Thanks for joining us!
            </p>
            <p className="text-md md:text-xl text-gray-500 dark:text-gray-300 mb-4">        
                Exciting updates are on the way &ndash; stay tuned! 🚀
            </p>
            <div className="mt-3"></div>
          </div>
        </div>

        <footer className="w-full text-center py-4">
          <p className="text-sm text-gray-400">
            Copyright © 2024{" "}
            <a href="/" className="font-bold text-yellow-600">
              UltraQuill
            </a>
            . All Rights Reserved.
          </p>
        </footer>
      </section>
    </div>
  );
}