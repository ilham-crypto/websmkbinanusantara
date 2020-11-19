import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Beranda extends Component{
    render(){
        return(
            <div>
                <h3 align="center">Beranda</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">BERANDA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                </center><hr></hr>
                <marquee><h1 align="center">Selamat datang di website sekolah kamii....</h1></marquee>
                <hr></hr>
                <center>
                <img src="3.jpg" width="1300" height="500"/> 
                </center>
                <br></br>
                <h1 align="center">Silahkan cek profil-profil kami diatas</h1>
            </div>
        )
    }
}
export default Beranda;