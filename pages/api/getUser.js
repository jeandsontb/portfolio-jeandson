import getUser from "../../utils/back";


const apiGetUser = async (req, res ) => {
  const data = await getUser('jeandsontb');
  res.send(data);
}

export default apiGetUser;