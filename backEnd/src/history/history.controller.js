import { getUserHistory } from "./history.service.js";

export function getHistory(req, res) {
  try {
    const userId = req.user.id;

    const history = getUserHistory(userId);

    return res.status(200).json({
      error: false,
      history
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: "Failed to fetch history"
    });
  }
}