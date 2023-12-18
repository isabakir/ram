import axios from "axios";

const fetcCharacterhData = async () => {

  const res = await axios.get("https://rickandmortyapi.com/api/character");
  return res.data.results;
}
const fetchAllCharacterData = async (page: string = "1") => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character?page=${page}`)

  const info = res.data.info;
  const data = res.data.results;
  return res.data;
}

const fetchLocationData = async (page: string = "1") => {
  const res = await axios.get(`https://rickandmortyapi.com/api/location?page=${page}`);
  // console.log(res.data);
  const info = res.data.info;
  const data = res.data.results;
  return { info, data };
}

export { fetcCharacterhData, fetchLocationData, fetchAllCharacterData };