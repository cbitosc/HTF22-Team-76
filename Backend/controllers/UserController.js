import User from "../models/UserModel.js";
import { Sequelize } from "sequelize";
const Op =Sequelize.Op;
export const getUsers = async (req, res) => {
    const search = req.query.search_query || "";
    try {
      const response = await User.findAll({
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

export const getUserById = async(req, res) =>{
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

export const createUser = async(req, res) =>{
    try {
        await User.create(req.body);
        res.status(201).json({msg: "User Created"});
    } catch (error) {
        console.log(error.message);
    }
}

export const updateUser = async(req, res) =>{
    try {
        await User.update(req.body,{
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteUser = async(req, res) =>{
    try {
        await User.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        console.log(error.message);
    }
}