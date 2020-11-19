import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Kepalasekolah extends Component{
    render(){
        return(
            <div>
                <h3 align="center">Kepala Sekolah</h3>
                <center>
                 <Mui.Button variant="contained">< a href="/">BERANDA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                </center><hr></hr>
                <center>
                <h1>Kepala sekolah</h1>
                    <img src="ppl.jpg" width="300" height="350"/>
                    <h5>Eka Aribawa,S.Pd.I<br></br>
                        Kepala Sekolah
                    </h5><hr></hr>
                    <br></br>
                <p></p>
                </center>
            </div>
        )
    }
}
export default Kepalasekolah;