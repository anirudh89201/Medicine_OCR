export const uploadController = (req,res) => {
    const {uri,name,type} = req.body;
    return res.status(200).json({"message":`${uri} ${name} ${type}`})
}