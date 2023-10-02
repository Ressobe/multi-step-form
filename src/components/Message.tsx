export default function Message() {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-3">
      <img src="assets/images/icon-thank-you.svg" className="w-16" />
      <h1 className="text-2xl text-marine-blue font-bold">Thank you!</h1>
      <p className="text-cool-gray font-thin">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
