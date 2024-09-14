import AdminModel from '../../models/Admin/AdminModel.js'

const AdminUpdateProfile = async(req,res) => {
    const allowedUpdates = {
        AdminFirstName: req.body.AdminFirstName,
        AdminLastName: req.body.AdminLastName,
        AdminGender: req.body.AdminGender,
        AdminPincode: req.body.AdminPincode,
        AdminWork: req.body.AdminWork,
        AdminCurrentLocation: req.body.AdminCurrentLocation,
        AdminProfilePhoto: req.body.AdminProfilePhoto 
    };
    Object.keys(allowedUpdates).forEach(key=>{
        if(allowedUpdates[key]===undefined){
            delete allowedUpdates[key];
        }
    })
    try {
        const data = await AdminModel.findOne({ _id: req.params.id });

        if (!data) {
            res.send({status:"Warn",message:`Admin with ID - ${req.params.id} not found.....`});
            // return res.status(404).send({ status: "Warn", message: `Admin with ID - ${req.params.id} not found.` });
        }

        const updatedData = await AdminModel.findByIdAndUpdate(
            req.params.id,
            { $set: allowedUpdates },
            { new: true, runValidators: true } // new: true returns the updated document, runValidators ensures the data is validated
        );
        res.send({ status: "Success", message: `Profile updated successfully.`, data: updatedData });
        // res.status(200).send({ status: "Success", message: `Profile updated successfully.`, data: updatedData });
    } catch (error) {
        res.send({ status: "Unsuccess", message: "An error occurred while updating the profile.", error: error.message });
        // res.status(500).send({ status: "Error", message: "An error occurred while updating the profile.", error: error.message });
    }
}

export default AdminUpdateProfile;
