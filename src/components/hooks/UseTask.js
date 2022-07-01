const { useQuery } = require("react-query");

const useTask = () => {
  const { data, isLoading, error, refetch } = useQuery("QueryTask", () =>
    fetch("https://vast-mesa-60285.herokuapp.com/allTask").then((res) =>
      res.json()
    )
  );
  return [data, isLoading, error, refetch];
};
export default useTask;
