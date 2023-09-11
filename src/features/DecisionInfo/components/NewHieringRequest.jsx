import CardContainer from "../../../components/shared/card/CardContainer";
import Card from "../../../components/shared/card";
import Button from "../../../components/atoms/Button.component";
import { useNavigate } from "react-router";
const NewHieringRequest = () => {
  const navigate = useNavigate();
  const newHireing = {
    data: [
      { id: 11250, critical: "yes", title: "Sr. Software Engineer" },
      { id: 11251, critical: "yes", title: "Sr. Software Engineer" },
      { id: 11252, title: "Sr. Software Engineer" },
      { id: 11253, title: "Sr. Software Engineer" },
      { id: 11254, title: "Sr. Software Engineer" },
    ],
  };
  const handleHieringDetail = (id) => {
    navigate(`/hire/${id}`);
  };
  return (
    <CardContainer customClass={`border-0`}>
      <div className="grid grid-cols-2 gap-8 mt-5 mb-5">
        {newHireing.data.map((obj) => (
          <Card title={obj.title + " | 6-8 years"} key={obj.id}>
            <div
              className="grid border-2 border-b-0 my-2 w-full mb-5 cursor-pointer"
              onClick={() => handleHieringDetail(obj.id)}
            >
              <div className="border-b-2 grid grid-cols-4">
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-5">
                  Experience Range:
                </div>
                <div className="grid col-span-3 bg-gray-300 text-black font-bold px-5 items-center ">
                  6-8 years
                </div>
              </div>
              <div className="border-b-2 text-gray-400 grid grid-cols-4">
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-5">
                  Primary skills :
                </div>
                <div className="grid col-span-3 bg-gray-300 text-black font-bold px-5 items-center">
                  .net, .netCore, C#
                </div>
              </div>
              <div className="border-b-2 text-gray-400 grid grid-cols-4">
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-5">
                  Secondary skills :
                </div>
                <div className="grid col-span-3 bg-gray-300 text-black font-bold px-5 items-center">
                  ReactJs/Angular, AWS or any cloud, Unit testing,
                </div>
              </div>
              <div className="border-b-2 text-gray-400 grid grid-cols-4">
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-5">
                  Additional skills :
                </div>
                <div className="grid col-span-3 bg-gray-300 text-black font-bold px-5 items-center">
                  CI/CD
                </div>
              </div>
              <div className="border-b-2 grid grid-cols-4">
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-1">
                  Total openings:
                </div>
                <div className="grid bg-gray-300 text-black font-bold px-5 items-center">
                  5
                </div>
                <div className="grid col-span-2 text-gray-100">
                  <div className="grid grid-rows-2 bg-gray-700 h-full">
                    <div className="grid grid-cols-2">
                      <div className="grid border-2 px-2 items-center justify-center">
                        Matching New Resources
                      </div>
                      <div className="grid border-2 px-2 items-center justify-center">
                        Matching New Resources
                      </div>
                    </div>
                    <div className="grid grid-cols-2 bg-gray-300 text-black font-bold">
                      <div className="grid border-2 items-center justify-center">
                        2
                      </div>
                      <div className="grid border-2 items-center justify-center">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <div className="border-b-2 text-gray-400 grid grid-cols-6">
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-1">
                  Total openings:
                </div>
                <div className="grid bg-gray-300 text-black font-bold px-5 items-center">
                  5
                </div>
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-1">
                  Matching Bench Resources:
                </div>
                <div className="grid bg-gray-300 text-black font-bold px-5 items-center">
                  2
                </div>
                <div className="grid bg-gray-500 text-gray-100 px-5 items-center py-1">
                  Matching New Resources:
                </div>
                <div className="grid bg-gray-300 text-black font-bold px-5 items-center">
                  15
                </div>
              </div>
              */}
            </div>
          </Card>
        ))}
      </div>
    </CardContainer>
  );
};

export default NewHieringRequest;
