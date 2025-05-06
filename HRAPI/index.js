const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res) => {
    try {
        res.json('WELCOME TO HR API');
    } catch (err) {
        res.status(500).json({ ERROR: err.message });
    }
});
app.get('/country',async(req,res)=>{
    try{
const result = await pool.query('select * from countries');
res.json(result.rows);
    }
    catch(err){
        res.status(500).json({ERROR:error.message});
    }

});

app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});

app.get('/employee',async(req,res)=>{
    try{
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    }
    catch(err){
        res.status(500).json({ERROR:error.message});
    }
});

app.get('/Locatin',async(req,res)=>{
    try{
        const result = await pool.query('select * from locatins');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});

app.get('/job',async(req,res)=>{
    try{
        const result = await pool.query('select * from jobs');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});

app.get('/department',async(req,res)=>{
    try{
        const result = await pool.query('select * from departments');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});


app.get('/gettotalemployee',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from employees');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});


app.get('/gettotalcountry',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from countries');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});


app.get('/gettotaldepartment',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from departments');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});


app.get('/gettotalregion',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from regions');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});


app.get('/gettotallocation',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from locations');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});

app.get('/gettotaljob',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from jobs');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});

app.get('/gettotaljobhistory',async(req,res)=>{
    try{
        const result = await pool.query('select count(*) from job_history');
        res.json(result.rows);
    }
    catch(err)
{
    res.status(500).json({ERROR:error.message});
}});


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Connected Succesfully.....on PORT ${PORT}`);
});