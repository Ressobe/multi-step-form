import { FormItems, inputsErrors } from "../App";

type StepProps = FormItems & {
  updateForm: (item: Partial<FormItems>) => void;
  updateError: React.Dispatch<React.SetStateAction<inputsErrors>>;
  nameError: boolean;
  emailError: boolean;
  phoneError: boolean;
};

export default function YourInfo({
  name,
  email,
  phone,
  nameError,
  emailError,
  phoneError,
  updateForm,
  updateError,
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
        <label htmlFor="name" className="inline-flex justify-between">
          <span className="text-marine-blue font-thin">Name</span>
          <span className="text-red-600" data-input-error="email">
            {nameError ? "This field is required" : ""}
          </span>
        </label>
        <input
          type="text"
          placeholder="e.g. Stephen King"
          className={`outline-none border py-3 px-4 mt-2 rounded-md focus:border-purplish-blue ${
            nameError ? "border-red-600" : ""
          }`}
          onChange={(e) => {
            updateForm({ name: e.target.value });
            updateError((prev: inputsErrors) => ({
              ...prev,
              nameError: false,
            }));
          }}
          value={name}
          name="name"
          autoComplete="name"
          id="name"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="inline-flex justify-between">
          <span className="text-marine-blue font-thin">Email Address</span>
          <span className="text-red-600" data-input-error="email">
            {emailError ? "This field is required" : ""}
          </span>
        </label>
        <input
          type="email"
          placeholder="e.g. stephenking@lorem.com"
          className={`outline-none border py-3 px-4 mt-2 rounded-md focus:border-purplish-blue ${
            emailError ? "border-red-600" : ""
          }`}
          onChange={(e) => {
            updateForm({ email: e.target.value });
            updateError((prev: inputsErrors) => ({
              ...prev,
              emailError: false,
            }));
          }}
          value={email}
          name="email"
          autoComplete="email"
          id="email"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="phone" className="inline-flex justify-between">
          <span className="text-marine-blue font-thin">Phone Number</span>
          <span className="text-red-600" data-input-error="email">
            {phoneError ? "This field is required" : ""}
          </span>
        </label>
        <input
          type="tel"
          placeholder="e.g. +1 234 567 890"
          className={`outline-none border py-3 px-4 mt-2 rounded-md focus:border-purplish-blue ${
            phoneError ? "border-red-600" : ""
          }`}
          onChange={(e) => {
            updateForm({ phone: e.target.value });
            updateError((prev) => ({ ...prev, phoneError: false }));
          }}
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
