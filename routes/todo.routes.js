const express = require('express')
const router = express.Router();
// GET/todo -> get all todo
// POST/todo -> add new todo
// PATCH -> to update todo on given id
// DELETE -> remove particular todo on given id
// GET/todo/:id -> return only todo whose id matches

router.get("/", (req, res) => {
    req.conn.query("SELECT * FROM todos", (error, result) => {
        if (error) {
            res.status(500).send("Error aayo")
        }
        if(result.rows.length>0) res.json(result.rows)
        else res.json({message: "no data in table"})
    })
})

router.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    req.conn.query("select * from todos where id=$1",[id],(error,result)=>{
        if(error) res.status(500).send("error at updating todo");
        if(result.rows.length>0) res.json(result.rows)
        else res.json({message: "no data with id " + id + " found"})
    })
});

router.post("/",(req,res)=>{
    const todo = req.body.title;
    req.conn.query("insert into todos (title) values ($1)",[todo],(error,result)=>{
        if(error) res.status(500).send("error at adding todo");
        res.json({message: "data added succesfully"});
    })
});

router.patch("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const title = req.body.title;
    req.conn.query("update todos set title=$1 where id=$2",[title,id],(error,result)=>{
        if(error) res.status(500).send("error at updating todo");
        if(result.rowCount>0) res.json({message: "data updated succesfully"})
        else res.json({message: "no data in table with id "+ id})
    })
});

router.delete("/:id",(req,res)=>{
    const id = parseInt(req.params.id)
    req.conn.query("delete from todos where id=$1",[id],(error,result)=>{
        if(error) res.status(500).send("error at updating todo");
        if(result.rowCount>0) res.json({message: "data deleted succesfully"})
        else res.json({message: "no data in table with id "+ id})
    })
});

module.exports = router;