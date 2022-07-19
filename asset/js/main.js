$(function(){


  
    fetch('../asset/data/list.json')
    .then((response)  => response.json())
    .then((json) => {
  
      const airpods2nd = json.airpods2nd;
      
      let airpods2ndhtml = '';
  
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
  
      
  
      document.querySelector('.airpods-2nd .info-list').innerHTML = airpods2ndhtml;
      
  
    })
    
})