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
        
      const multisound = `<img src="./asset/images/col1.png" alt=""><p class="text">동적 머리 추적 기술로 <br> 구현되는 공간 음향 <sup><a href="#remark-13" class="remark">13</a></sup></p>`;
      const noise = `<img src="./asset/images/col1.png" alt=""><p class="text">동적 머리 추적 기술로 <br> 구현되는 공간 음향 <sup><a href="#remark-13" class="remark">13</a></sup></p>`;
      const water = `<img src="./asset/images/col3.png" alt=""><p class="text">땀과 습기에 강한 <br> 생활 방수 디자인 <sup><a href="#remark-14" class="remark">14</a></sup></p>`;
      const charging = `<img src="./asset/images/col4.png" alt=""><p class="text">MagSafe, 무선 및 <br> Lightning 케이블 충전 <sup><a href="#remark-15" class="remark">15</a></sup></p>`;
      const duration = `<p class="text">
                            <span class="value">6시간</span>
                            <span class="sub-value">한 번 충전으로 <br> 최대 6시간 청취 가능 <sup><a href="#remark-16" class="remark">16</a></sup></span>
                        </p>`;

      


      let item = '-';

      airpods2nd.forEach(element => {
        
        if(element.fuction == 'multisound' && element.mounted == true){
            item = multisound
        }else if(element.fuction == 'noise' && element.mounted == true){
            item = noise
        }else if(element.fuction == 'water' && element.mounted == true){
            item = water
        }else if(element.function == 'charging' && element.mounted == true){
            item = charging
        }
        
        airpods2ndhtml +=  `<li class="info-item"><p class="text">${item}</p></li>`;



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
    //   document.querySelector('.airpods-3rd .info-list').innerHTML = airpods3rdhtml;
    //   document.querySelector('.airpods-pro .info-list').innerHTML = airpodsprohtml;
    //   document.querySelector('.airpods-max .info-list').innerHTML = airpodsmaxhtml;
      
  
    })
    
})