import React, { Component } from 'react';
import * as Mui from '@material-ui/core';

class Guru extends Component{
    render(){
        return(
            <div>
                <h3 align="center">Guru</h3>
                <center>
                
                 <Mui.Button variant="contained">< a href="/">BERANDA</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Sejarah">SEJARAH SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Guru">Guru</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Kepalasekolah">KEPALA-SEKOLAH</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Jurusan">JURUSAN</a></Mui.Button>
                <Mui.Button variant="contained">< a href="/Alamatkontak">ALAMAT-KONTAK</a></Mui.Button>
                
                </center><hr></hr>
                <Mui.Container fidex>
                    <center>
                        <Mui.Grid container spacing={1}>
                        <Mui.Grid item xs={2} sm={3}>
                                 <img src="/eka.jpg" width="260" height="300"></img>
                                    <p>Eka Aribawa, S.Pd.I</p>
                                    <p><b>Kepala Sekolah</b></p>
                        </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/septy.jpg"></img>
                                    <p>Septi Muslikhah</p>
                                    <p><b>Waka Kurikulum</b></p>
                            </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                <img src="/ari.jpg"></img>
                                    <p>Ari Dwi Handoko,S.Pd</p>
                                    <p><b>Waka Kesiswaan</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                <img src="/khusnul.jpg"></img>
                                    <p>Khusnul Khotima,S.Pd</p>
                                    <p><b>Waka Sarana dan Prasarana</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/as.jpg"></img>
                                    <p>Askuriat,S.E</p>
                                    <p><b>Waka SDM</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/linda.jpeg" width="260" height="300"></img>
                                    <p>Isti Malinda,S.Pd</p>
                                    <p><b>K3 Tata Busana</b></p>
                             </Mui.Grid>
                             <Mui.Grid item xs={3} sm={3}>
                                 <img src="/dian.jpeg" width="260" height="300"></img>
                                    <p>Dianing Ratri O,S.Pd</p>
                                    <p><b>Sekretaris Jurusan Teknik Komputer dan Jaringan</b></p>
                             </Mui.Grid>
                            <Mui.Grid item xs={3} sm={3}>
                                 <img src="/nonok.jpg" width="260" height="300"></img>
                                    <p>Nonok Royin Wibowo</p>
                                    <p><b>Ka. Lab Sekretaris Jurusan Teknik Bisnis Sepeda Motor</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/dwi.jpeg" width="260" height="300"></img>
                                    <p>Indah Dwi Putri Banjarsari,S.Pd</p>
                                    <p><b>Guru Mapel Matematika</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/ida.jpeg" width="260" height="300"></img>
                                    <p>Ida Fahru Roziyah, S.Pd</p>
                                    <p><b>Guru Mapel Bahasa Jawa</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/novita.jpeg" width="260" height="300"></img>
                                    <p>Novita Widyaastutik,S.Pd</p>
                                    <p><b>K3 Akuntansi dan Keuangan Lembaga</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/wahyu.jpeg" width="260" height="300"></img>
                                    <p>Wahyu Ambikawati,S.Pd</p>
                                    <p><b>K3 Teknik Bisnis Sepeda Motor</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/arga.jpg" width="260" height="300"></img>
                                    <p>Arga Dian SW,S.kom</p>
                                    <p><b>K3 Teknik Komputer Dan Jaringan</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/soim.jpeg" width="260" height="300"></img>
                                    <p>Soimatun,S.Pd</p>
                                    <p><b>Sekretaris Jurusan Tata Busana</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/rabisan.jpg" width="260" height="300"></img>
                                    <p>Tri Rabisan,S.Pd</p>
                                    <p><b>Sekretaris Teknik Bisnis Sepeda Motor</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/vega.jpeg" width="260" height="300"></img>
                                    <p>Vega Nurmalita,S.Pd</p>
                                    <p><b>Sekretaris Jurusan Akuntansi Dan Keuangan Lembaga</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/taqi.jpeg" width="260" height="300"></img>
                                    <p>Taqius SA,S.kom</p>
                                    <p><b>Ka Lab Jurusan Teknik Komputer Dan Jaringan</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/aroem.jpeg" width="260" height="300"></img>
                                    <p>Aroem Santi L,S.Pd</p>
                                    <p><b>Ka Lab Jurusan Tata Busana</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/indah.jpeg" width="260" height="300"></img>
                                    <p>Indah Noviani,S.Pd</p>
                                    <p><b>Guru Mapel Bahasa Indonesia</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/arif.jpeg" width="260" height="300"></img>
                                    <p>Arif Adi Wijaya,S.Pd</p>
                                    <p><b>Guru Mapel Penjasorkes</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/tito.jpeg" width="260" height="300"></img>
                                    <p>Tito Dwi Yulianto,S.Pd</p>
                                    <p><b>Guru Mapel Bahasa inggris</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/sholeh.jpeg" width="260" height="300"></img>
                                    <p>Muhammad Sholeh,S.Pd.I</p>
                                    <p><b>Guru Mapel Agama Islam</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/ruroh.jpeg" width="260" height="300"></img>
                                    <p>Siti Masruroh,A.Md</p>
                                    <p><b>Guru Mapel Bahasa Jepang</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/ruri.jpeg" width="260" height="300"></img>
                                    <p>Ruri Ayuning Lati,S.Pd</p>
                                    <p><b>Guru Bk</b></p>
                           </Mui.Grid>
                           <Mui.Grid item xs={3} sm={3}>
                                 <img src="/rufi.jpeg" width="260" height="300"></img>
                                    <p>Rufi Tri Irianti,S.Pd</p>
                                    <p><b>Guru Mapel Pendidikan Karakter</b></p>
                           </Mui.Grid>
                           </Mui.Grid>
                    </center>
                </Mui.Container>
            </div>
        )
    }
}
export default Guru;