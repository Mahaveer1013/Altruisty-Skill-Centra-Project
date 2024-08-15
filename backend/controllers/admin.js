


// ============> Admin route for checking route protection <==========
export const checkAdminRoute = async (req, res) => {
    console.log(req.user.user_type);
    if (req.user.user_type !== 1) {
      res.status(401).json({ message: 'Unauthorized User' });
    } else {
      res.json({'message':'You Are Admin'});
    }
};
