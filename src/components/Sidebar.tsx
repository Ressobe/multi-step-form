export default function Sidebar({ activeIndex }: { activeIndex: number }) {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <nav className="z-0 pb-10 bg-sidebar-mobile bg-cover h-36  flex justify-center items-center gap-6">
      {steps.map((step, index) => {
        return (
          <div key={index}>
            <div
              className={`w-10 h-10 inline-flex justify-center items-center text-white border border-white rounded-full ${
                activeIndex === index ? "bg-light-blue text-black" : ""
              } `}
            >
              {index + 1}
            </div>

            {/* <div className="hidden"> */}
            {/*   <span>Step {index + 1}</span> */}
            {/*   <h1>{step}</h1> */}
            {/* </div> */}
          </div>
        );
      })}
    </nav>
  );
}
