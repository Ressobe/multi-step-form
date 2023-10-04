import { FormItems } from "../App";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
};

export default function YourInfo({
  name,
  email,
  phone,
  updateForm,
}: StepProps) {
  return (
    <>
      <div>
        <h1 className="text-2xl lg:text-4xl text-marine-blue font-bold">
          Personal info
        </h1>
        <p className="text-cool-gray text-md font-thin pt-2">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col">
        <label htmlFor="name">
          <span className="text-marine-blue font-thin">Name</span>
          <span className="text-red-600" data-input-error="email"></span>
        </label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          className="outline-none border py-3 px-4 mt-2 rounded-md focus:border-purplish-blue"
          onChange={(e) => updateForm({ name: e.target.value })}
          value={name}
          name="name"
          autoComplete="name"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email">
          <span className="text-marine-blue font-thin">Email Address</span>
          <span className="text-red-600" data-input-error="email"></span>
        </label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className="outline-none border py-3 px-4 mt-2 rounded-md focus:border-purplish-blue"
          onChange={(e) => updateForm({ email: e.target.value })}
          value={email}
          name="email"
          autoComplete="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone">
          <span className="text-marine-blue font-thin">Phone Number</span>
          <span className="text-red-600"></span>
        </label>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          className="outline-none border py-3 px-4 mt-2 rounded-md focus:border-purplish-blue"
          onChange={(e) => updateForm({ phone: e.target.value })}
          value={phone}
          name="phone"
          autoComplete="phone"
          id="phone"
          required
        />
      </div>
    </>
  );
}
