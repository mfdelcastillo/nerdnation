const Post = require('../models/post');
module.exports = {Index, Delete, Update, Create, Edit, Show};


async function Index(req, res){
    try{
        const feed = await Post.find({});
        res.status(200).json(feed);
    }
    catch(err){
        res.status(400).json(err)
    }
};

async function Delete(req, res){
    try{
        const {id} = await req.params;
        await Post.findByIdAndDelete(id);
    }
    catch(err) {
        res.status(400).json(err);
    }
}

async function Update(req, res) {
    try{
        const {id} = await req.params;
        const {body} = await req.params;
        const updatedPost = await Post.findByIdAndUpdate(id. body, {new:true});
        res.status(200).json(updatedPost);
    }
    catch(err){
        res.status(400).json(err)
    }
}

async function Create(req,res){
    try{
        const createdPost = await postMessage.create(req.body)
        res.status(200).json(createdPost)
    }
    catch(err){
        res.status(400).json(err);
    }
}

async function Edit(req,res){
    try{
        const {id} = await req.params;
        const editedPost = await Post.findById(id)
        res.status(200).json(editedPost);
    }
    catch(err){
        res.status(400).json(err);
    }
}

