import { useEffect, useState } from "react";
import ServiceData from "../../../services/api";

const useMain = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState([]);

  const getDataApi = async () => {
    const { data, status } = await ServiceData.getData();
    if (status === 200) setData(data.values);
  };

  const dataLabel = data.map((r) => ({
    label: `${r.first_name} ${r.last_name}`,
    meters: r.h_meters,
  }));

  useEffect(() => {
    getDataApi();
    setSearch([]);
  }, []);

  const findData = (e) => {
    if (e === "") {
      setSearch([]);
      return;
    }
    const search = data.filter((r) =>
      `${r.first_name} ${r.last_name}`.includes(e.label)
    );
    setSearch(search);
  };

  return {
    search,
    findData,
    data,
    dataLabel,
  };
};
export default useMain;
