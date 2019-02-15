module.exports = {
  gettAll: (req, res) => {
    const dbInstance = req.app.get('db');
    dbInstance.getProduct().then((response) => {
      res.send(response)
      console.log(222222,dbInstance)
    }
    )
  }
}