export default function Sidebar({ activeIndex }: { activeIndex: number }) {
  const steps = ["Your info", "Select plan", "Add-ons", "Summary"];

  return (
    <nav className='w-1/3 py-10 m-5 bg-sidebar-desktop bg-cover bg-bottom bg-no-repeat rounded-lg'>
      <div className='flex flex-col justify-start items-start gap-6 w-1/2 ml-10 rounded-lg'>
        {steps.map((step, index) => {
          return (
            <div
              key={index}
              className='inline-flex justify-center items-center gap-5'
            >
              <div
                className={`w-10 p-2 text-center border rounded-full text-white ${
                  index === activeIndex ? "bg-light-blue" : ""
                }`}
              >
                {index + 1}
              </div>
              <div>
                <span className='text-cool-gray'>Step {index + 1}</span>
                <h1 className='text-white font-bold text-xl'>{step}</h1>
              </div>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
