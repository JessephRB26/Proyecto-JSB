const AdminMiddleware = (req,res,next) => {
    const { role } = req.query;

    if (role !== 'Admin')  {
        return res.status(403).json ({
            data: null,
            error: 'Forbidden',
            message : 'You must be an admin to access this route'
        });
    } else {
         next ();
    }
};

Module.exports = AdminMiddleware;

