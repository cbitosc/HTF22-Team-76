import contact from "../models/contactsmodel.js";

export const getcontacts = async (req, res) => {
  try {
    const response = await contact.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const getcontactById = async (req, res) => {
  try {
    const response = await contact.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createcontact = async (req, res) => {
  try {
    awaitcontact.create(req.body);
    res.status(201).json({ msg: "Contact Created" });
  } catch (error) {
    console.log(error.message);
  }
};

export const updatecontact = async (req, res) => {
  try {
    await contact.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Contact Updated" });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteUser = async (req, res) => {
  try {
    await contact.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Contact Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

