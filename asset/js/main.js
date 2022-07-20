$(function(){


  
    fetch('../asset/data/list.json')
    .then((response)  => response.json())
    .then((json) => {
  
      const airpods2nd = json.airpods2nd;
      const airpods3rd = json.airpods3rd;
      const airpodspro = json.airpodspro;
      const airpodsmax = json.airpodsmax;
      
      let airpods2ndhtml = '';
      let airpods3rdhtml = '';
      let airpodsprohtml = '';
      let airpodsmaxhtml = '';
  
      airpods2nd.forEach(element => {
  
        airpods2ndhtml +=  `<li class="info-item"><p class="text">${element.empty}</p></li>
                            <li class="info-item"><p class="text">${element.empty}</p></li>
                            <li class="info-item"><p class="text">${element.empty}</p></li>
                            <li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoCharge}</p>
                            </li>
                            <li class="info-item">
                                <p class="text">
                                    <span class="value">${element.time}</span>
                                    <span class="sub-value">${element.infoTime} <sup><a href="#remark-16" class="remark">16</a></sup></span>
                                </p>
                            </li>`;
      });


      airpods3rd.forEach(element => {
  
        airpods3rdhtml +=  `<li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoSound} <sup><a href="#remark-13" class="remark">13</a></sup></p>
                            </li>
                            <li class="info-item"><p class="text">${element.empty}</p></li>
                            <li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoWater} <sup><a href="#remark-14" class="remark">14</a></sup></p>
                            </li>
                            <li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoCharge} <sup><a href="#remark-15" class="remark">15</a></sup></p>
                            </li>
                            <li class="info-item">
                                <p class="text">
                                    <span class="value">${element.time}</span>
                                    <span class="sub-value">${element.infoTime} <sup><a href="#remark-16" class="remark">16</a></sup></span>
                                </p>
                            </li>`;
      });



      airpodspro.forEach(element => {
  
        airpodsprohtml +=  `<li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoSound} <sup><a href="#remark-13" class="remark">13</a></sup></p>
                            </p></li>
                            <li class="info-item">
                                <div class="set-img-box">
                                    <img src="${element.imgSrc}" alt="" class="set-img">
                                    <img src="${element.imgSrc2}" alt="" class="set-img">
                                </div>
                                <p class="text">${element.infoNoise}</p>
                            </li>
                            <li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoWater} <sup><a href="#remark-14" class="remark">14</a></sup></p>
                            </p></li>
                            <li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoCharge} <sup><a href="#remark-15" class="remark">15</a></sup></p>
                            </li>
                            <li class="info-item">
                                <p class="text">
                                    <span class="value">infoTime</span>
                                    <span class="sub-value">${element.infoTime} <sup><a href="#remark-16" class="remark">16</a></sup></span>
                                </p>
                            </li>`;
      });




      airpodsmax.forEach(element => {
  
        airpodsmaxhtml +=  `<li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoSound} <sup><a href="#remark-13" class="remark">13</a></sup></p>
                            </p></li>
                            <li class="info-item">
                                <div class="set-img-box">
                                    <img src="${element.imgSrc}" alt="" class="set-img">
                                    <img src="${element.imgSrc2}" alt="" class="set-img">
                                </div>
                                <p class="text">${element.infoNoise}</p>
                            </li>
                            <li class="info-item"><p class="text">${element.empty}</p></li>
                            <li class="info-item">
                                <img src="${element.imgSrc}" alt="">
                                <p class="text">${element.infoCharge} <sup><a href="#remark-15" class="remark">15</a></sup></p>
                            </li>
                            <li class="info-item">
                                <p class="text">
                                    <span class="value">${element.time}</span>
                                    <span class="sub-value">${element.infoTime} <sup><a href="#remark-16" class="remark">16</a></sup></span>
                                </p>
                            </li>`;
      });
  
      
  
      document.querySelector('.airpods-2nd .info-list').innerHTML = airpods2ndhtml;
      document.querySelector('.airpods-3rd .info-list').innerHTML = airpods3rdhtml;
      document.querySelector('.airpods-pro .info-list').innerHTML = airpodsprohtml;
      document.querySelector('.airpods-max .info-list').innerHTML = airpodsmaxhtml;
      
  
    })
    
})