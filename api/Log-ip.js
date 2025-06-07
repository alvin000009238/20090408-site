export default function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  console.log("訪客 IP：", ip);

  res.status(200).json({ message: "IP logged", ip });
}
