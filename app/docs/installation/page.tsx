export default function InstallationPage() {
  return (
    <div className="min-h-screen p-8 text-white overflow-scroll">
      <div className="max-w-4xl mx-auto rounded-lg shadow-lg p-10">
        <div className="mb-8">
          <h1 className="text-4xl sm:text-6xl font-extrabold text-center text-white mb-4">
            Proactinet Installation
          </h1>
          <p className="text-xl text-center text-white">
            Secure your device with Proactinet - the anti-botnet platform.
          </p>
        </div>

        <div className="space-y-6">
          <section>
            <h2 className="text-3xl font-bold border-b-2 border-white pb-2">
              Installation Steps (Linux Only)
            </h2>
            <p className="mt-4 text-lg text-white">
              Follow these simple steps to install Proactinet on your Linux
              system.
            </p>
            <ul className="list-decimal pl-8 mt-4 space-y-4 text-white">
              <li>
                Download the Proactinet binary file from{" "}
                <a
                  href="#"
                  className="text-pink-accent hover:underline font-semibold"
                >
                  here
                </a>
                . {/* Replace # with your actual download link */}
              </li>
              <li>
                Open a terminal and navigate to the directory where the file was
                downloaded.
              </li>
              <li>
                Run the binary with the following command:
                <pre className="bg-[#20170fc9] p-2 rounded-xl overflow-x-auto mt-2">
                  <code>{`
sudo ./proactinet-installer
                  `}</code>
                </pre>
              </li>
              <li>
                The installer will automatically install all the required
                dependencies.
              </li>
              <li>
                After installation, you'll be prompted to enter your login
                credentials.
                <ul className="list-disc pl-8 mt-4 space-y-2">
                  <li>
                    If you don't have an account yet, create one on our platform
                    before proceeding.
                  </li>
                </ul>
              </li>
              <li>
                Once logged in and installation is complete, head over to{" "}
                <a
                  href="/dashboard"
                  className="text-pink-accent hover:underline font-semibold"
                >
                  your dashboard
                </a>{" "}
                to monitor real-time logs and system activity.
              </li>
            </ul>
          </section>

          <section>
            <h3 className="text-2xl font-bold border-b border-white pb-2">
              What is Proactinet?
            </h3>
            <p className="mt-4 text-lg text-white">
              Proactinet is an advanced anti-botnet platform designed to protect
              your device in real time. It silently runs in the background,
              offering:
            </p>
            <ul className="list-disc pl-8 mt-4 space-y-2 text-white">
              <li>Real-time logs of all activities</li>
              <li>Instant email alerts for suspicious actions</li>
              <li>Continuous surveillance of the protected device</li>
            </ul>
          </section>

          <div className="flex gap-4 mt-8 justify-center">
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-accent bg-pink-accent px-10 text-lg font-medium text-white shadow-lg transition-colors hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white">
              Download Now
            </button>
            <button className="inline-flex h-12 items-center justify-center rounded-xl border border-pink-accent bg-pink-accent px-10 text-lg font-medium text-white shadow-lg transition-colors hover:bg-transparent focus:outline-none focus:ring-2 focus:ring-white">
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
