// this function executes for api/feedback route
// allows us to execute any server side code

function handler(req, res) {
  res.status(200).json({
    message: 'This works!',
  });
}

export default handler;
