module.exports = {
	get: function (req, res, next) {
		res.status(200);
		return res.json({ name: "junior" });
	},

	post: function (req, res, next) {
		res.status(200);
		return res.json({ name: "juniorrrrr" });
	}
};