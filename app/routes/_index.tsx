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
        <div className="py-12 md:py-20 text-center">
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
            <p className="text-lg text-gray-500 mb-8">
            Be the first to know before we launch! <br/>
            Join now and secure an exclusive early adopter discount!
            </p>

            <div>
              <form action="https://app.kit.com/forms/7444025/subscriptions" method="post" className="flex flex-col space-y-8">
              <input
                  type="text"
                  id="fields[first_name]"
                  name="first_name"
                  className="flex-grow bg-[#FFFFFF33] border-2 border-black rounded-xl shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#444] px-8 py-5 text-xl"
                  required
                  placeholder="First Name"
                />

                <input
                  type="email"
                  id="email_address"
                  name="email_address"
                  className="flex-grow bg-[#FFFFFF33] border-2 border-black rounded-xl shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#444] px-8 py-5 text-xl"
                  required
                  placeholder="Enter Your Email Here.."
                />
                <div className="hover:scale-x-105 hover:scale-y-110 transition-all w-full">
                <button
                  id="subscribe-form-submit"
                  name="subscribe-form-submit"
                  className="w-full bg-yellow-300 relative text-black font-bold px-8 py-5 rounded-xl text-xl group hover:bg-yellow-400 transition-all duration-300 hover:animate-[tilt_0.2s_infinite]"
                  type="submit"
                >
                 <span>I&apos;m in!</span>
                </button>
                </div>
              </form>
            </div>
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
