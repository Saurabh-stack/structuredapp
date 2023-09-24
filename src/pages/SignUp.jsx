import SignUp from "../components/inputForms/SignUp.component";
import Card from "../components/shared/card";

const SignUpPage = () => {
  return (
    <div className="flex flex-row justify-center items-center w-screen h-[calc(100vh-100px-2rem-2.5rem)]">
      <Card
        title={"Sign Up"}
        className="flex flex-col divide-gray-400 divide-x-0 w-1/4 border-4 border-white rounded-3xl l bg-slate-500"
      >
        <div className="w-full py-10 px-10">
          <SignUp />
        </div>
      </Card>
    </div>
  );
};

export default SignUpPage;
