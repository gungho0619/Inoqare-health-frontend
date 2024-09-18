import alert from "../components/common/Alert";

export default async function handler(tryBlock, catchBlock, finallyBlock) {
  try {
    await tryBlock();
  } catch (ex) {
    if (catchBlock) catchBlock(ex);
    else {
      alert("Error", ex.response.data.error, "error");
      console.log(ex.response.data); // also log the er
    }
  } finally {
    if (finallyBlock) finallyBlock();
  }
}
