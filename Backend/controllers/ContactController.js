import contact from "../models/contactsmodel.js";

import { Sequelize } from "sequelize";
const Op =Sequelize.Op;
export const getContacts = async (req, res) => {
    const search = req.query.search_query || "";
    try {
      const response = await contact.findAll({
          where :{
        name: {
                [Op.like]: '%'+search+'%'
          }
        }
        }
      );
      res.status(200).json(response);
    } catch (error) {
      console.log(error.message);
    }
  };
export const getcontactsById = async (req, res) => {
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
    await contact.create(req.body);
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

export const deletecontact = async (req, res) => {
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

