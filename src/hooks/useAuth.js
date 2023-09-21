const useAuth = () => {
  const token = {
    userInfo: {
      username: "Saurabh Jain",
      roles: ["HR"],
    },
  };
  let isManager = false;
  let isHR = false;
  let isEmployee = false;
  let status = "Employee";

  if (token) {
    const decodedToken = token;
    const { username, roles } = decodedToken?.userInfo; // userInfo property from backend
    isManager = roles.includes("Manager");
    isHR = roles.includes("HR");
    status = isManager ? "Manager" : isHR ? "HR" : "Employee";
    return { username, roles, status, isManager, isHR, isEmployee };
  }
  return { username: "", roles: [], status: "", isManager, isHR, isEmployee };
};
export default useAuth;
