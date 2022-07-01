const { useQuery } = require("react-query");

const useTask = () => {
  const { data, isLoading, error, refetch } = useQuery("QueryTask", () =>
    fetch("http://localhost:5000/allTask").then((res) => res.json())
  );
  return [data, isLoading, error, refetch];
};
export default useTask;
