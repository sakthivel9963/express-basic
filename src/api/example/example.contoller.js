class ExampleController {
  static async save(req, res, next) {
    try {
      res.json({
        status: 200,
        message: 'success',
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = ExampleController;
