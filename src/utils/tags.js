export async function getTags() {
  const response = await fetch("https://drewh.net/aslapi/tags/");
  const d = await response.json();
  const list = d.map((obj) => obj.tag);
  console.log(list);
  return d.map((obj) => obj.tag);
}
