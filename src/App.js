import React from 'react';
import Utama from './Components/utama';
import {Link} from 'react-router-dom';

class App extends React.Component {
  render(){
    return(
    <div>
    <nav class="navbar navbar-dark bg-dark">
    <div class="card-header">
    <ul class="nav nav-tabs">
    <img value src="image/logo-satgas.png" class="mr-3" width='110px' height='110px'/>
    <button><li class="nav-item" class="btn btn-info">
    <a class="nav-link active " >
    <Link to="/">Beranda</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-warning">
    <a class="nav-link active" href="#">
    <Link to="/tentangcovid">ABOUT COVID</Link></a>
    </li></button>
    <button><li class="nav-item" class="btn btn-danger">
    <a class="nav-link active" href="#">
    <Link to="/data"> DATA</Link></a>
    </li></button>
<div class="spinner-border text-primary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-secondary" role="status">
<span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-border text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>

<button><li class="nav-item" class="btn btn-success">
    <a class="nav-link active" href="#">
    <Link to="/facts"> FACTS ABOUT COVID-19</Link></a>
    </li></button>
    </ul>
    </div>
     </nav>
    <div class="card-body">
    <p><Utama /></p>
    </div>
    <div>
    <div class="card text-center bg-dark">
</div>
            <footer class="page-footer teal bg-dark">
            <div class="card text-center bg-primary">
              
  <div class="card-header bg-dark text-white">
    <h3>CONTACT US</h3>
  </div>
  <div className="card col-sm-5 mx-auto m-5 bg-warning">
 	                <div className="card-header text-center bg-success text-white">
Virus Corona atau severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2) adalah virus yang menyerang sistem pernapasan. 
Penyakit karena infeksi virus ini disebut COVID-19. Virus Corona bisa menyebabkan gangguan ringan pada sistem pernapasan, infeksi paru-paru yang berat, hingga kematian.
<a href="https://www.alodokter.com/virus-corona" target="_blank" rel="noopener noreferrer" className="white-text text-lighten-2"> Selengkapnya di Wikipedia.</a>
                   </div>
 	                   <div className="card-footer">
                        <center>
                        <a href="https://www.facebook.com/coronavirus_info/?page_source=bookmark" class="btn btn-primary">FACEBOOK</a>
                        <a href="https://instagram.com/satuantugascovid19?igshid=3cid5beho0a6" class="btn btn-danger">INSTAGRAM</a>
                        <a href="https://twitter.com/KemenkesRI?s=08" class="btn btn-primary">TWITTER</a></center>
 	                </div>
 	            </div>
  <div class="card-footer text-muted bg-dark">
  <div class="footer-copyright">
    <center><div class="spinner-grow text-primary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-secondary" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-success" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-danger" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-warning" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-info" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-light" role="status">
  <span class="sr-only">Loading...</span>
</div>
<div class="spinner-grow text-dark" role="status">
  <span class="sr-only">Loading...</span>
</div></center>
                    <center><div class="container text-white">
                    ©2020 Copyright |
                    <a class="grey-text text-lighten-4 right text-info" href="https://instagram.com/smktelkommalang?igshid=16oezb73y9yba"> @SMK TELKOM MALANG</a>
                    </div></center>
                </div>
  </div>
</div>
            </footer>
        </div>
     </div>
    
    );
  }
}

export default App;
