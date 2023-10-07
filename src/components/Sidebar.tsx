export default function Sidebar({ activeIndex }: { activeIndex: number }) {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <nav className="z-0 pb-10 bg-[url('/src/assets/images/bg-sidebar-mobile.svg')] lg:bg-[url('/src/assets/images/bg-sidebar-desktop.svg')] bg-cover h-36  flex justify-center items-center gap-6 lg:flex-col lg:h-full lg:p-10 lg:pr-20 lg:items-start lg:justify-start lg:rounded-md ">
      {steps.map((step, index) => {
        const isActive = activeIndex === index;

        return (
          <div
            className="lg:flex justify-center items-center gap-5"
            key={index}
          >
            <div
              className={`w-10 h-10 inline-flex justify-center items-center text-white border border-white rounded-full ${
                isActive ? "bg-magnolia" : ""
              } `}
            >
              <span className={`${isActive ? "text-black" : ""}`}>
                {index + 1}
              </span>
            </div>

            <div className="hidden lg:block">
              <span className="text-cool-gray">Step {index + 1}</span>
              <h1 className="text-white font-bold uppercase">{step}</h1>
            </div>
          </div>
        );
      })}
    </nav>
  );
}
