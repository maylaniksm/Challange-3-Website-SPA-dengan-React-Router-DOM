import React from 'react'

class Data extends React.Component{
    render(){
        return(
        <div>
            <div class="alert alert-warning" role="alert">
  <center><img value src="image/increase.png" class="mr-3" width='80px' height='80px'/><h2>DATA PENYEBARAN COVID-19 DI INDONESIA</h2></center></div>
  <div class="jumbotron">
  <div class="card-group">
  <div class="card bg-warning">
    <div class="card-body">
      <center><h3 class="card-title text-white">TOTAL KASUS</h3></center>
      <center><h1 class="card-title text-white">233 rb</h1></center>
      <h4><p class="card-text"><small class="text-muted">+3.635</small></p></h4>
    </div>
  </div>
  <div class="card bg-primary">
    <div class="card-body">
    <center><h3 class="card-title text-white">SEMBUH</h3></center>
    <center><h1 class="card-title text-white">167 rb</h1></center>
    </div>
  </div>
  <div class="card bg-danger">
    <div class="card-body">
    <center><h3 class="card-title text-white">MENINGGAL DUNIA</h3></center>
    <center><h1 class="card-title text-white">9.222</h1></center>
    <h4><p class="card-text"><small class="text-muted">+122</small></p></h4>
    </div>
  </div>
</div>
</div>
<div class="alert alert-dark" role="alert">
  <h2 class="text-dark">DKI JAKARTA</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  55,099 (24.9%)</a>
</div>
<div class="alert alert-danger" role="alert">
  <h2 class="text-dark">JAWA TIMUR</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  38,431 (17.3%)</a>
</div>
<div class="alert alert-warning" role="alert">
  <h2 class="text-dark">JAWA TENGAH</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  17,913 (8.1%)</a>
</div>
<div class="alert alert-success" role="alert">
  <h2 class="text-dark">JAWA BARAT</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  14,591 (6.6%)</a>
</div>
<div class="alert alert-primary" role="alert">
  <h2 class="text-dark">SULAWESI SELATAN</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  13,476 (6.1%)</a>
</div>
<div class="alert alert-danger" role="alert">
  <h2 class="text-dark">KALIMANTAN SELATAN</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  9,423 (4.3%)</a>
</div>
<div class="alert alert-info" role="alert">
  <h2 class="text-dark">SUMATERA UTARA</h2>
  <a href="#" class="alert-link">Jumlah Kasus :  8,559 (3.9%)</a>
</div>
<center><img value src="image/statistik.png" class="mr-3" width='1000px' height='550px'/></center>
<div class="alert alert-warning" role="alert">
  <center><img value src="image/map.png" class="mr-3" width='80px' height='80px'/><h2>PETA PENYEBARAN COVID-19 DI INDONESIA</h2></center></div>
  <center><img value src="image/peta.jpeg" class="mr-3" width='1200px' height='550px'/></center>
        </div>
        )
    }
}

export default Data;