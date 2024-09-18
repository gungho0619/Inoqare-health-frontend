export default async function handler(req, res) {
  const { country_code } = req.query; // Use req.query instead of req.body
  const response = await fetch(
    `https://flagsapi.com/${country_code}/flat/24.png`
  );
  const imageBuffer = await response.arrayBuffer();

  res.setHeader("Content-Type", "image/png");
  res.send(Buffer.from(imageBuffer));
}
